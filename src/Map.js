import {yellow} from '@material-ui/core/colors'
import Dialog from '@material-ui/core/Dialog/Dialog'
import Typography from '@material-ui/core/Typography/Typography'
import LocationOn from '@material-ui/icons/LocationOn'
import loremIpsum from 'lorem-ipsum'
import OpenSeadragon from 'openseadragon'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export class Map extends Component {
  container = React.createRef()

  state = {
    dialogOpen: true,
    selectedHtml: '',
  }

  componentDidMount() {
    this.viewer = OpenSeadragon({
      element: this.container.current,
      prefixUrl: `${process.env.PUBLIC_URL}/tiles_files/`,
      tileSources: `${process.env.PUBLIC_URL}/tiles.dzi`,
      overlays: this.generateOverlays(10),
      zoomPerClick: 1, // disable zoom on click
    })
  }

  makeMarkerClickHandler = (point) => () => {
    this.props.history.push(point.id)
    const target = new OpenSeadragon.Point(point.x, point.y)
    this.viewer.viewport.zoomTo(3, target)
    this.viewer.viewport.panTo(target)
    this.setState({
      dialogOpen: true,
      selectedHtml: point.html,
    })
  }

  generateOverlays = (size) => {
    return Array(size).fill(0).map((_, i) => {

      const id = `location-marker-${i}`
      const pointOptions = {
        id,
        x: (Math.random() * 0.8) + 0.2,
        y: (Math.random() * 0.5),
        placement: OpenSeadragon.Placement.CENTER,
        html: `
          <h1>Lorem Ipsum</h1>
          <h2>${id}</h2>
          <p>${loremIpsum({count: 2})}</p>
          <image src="/favicon.ico"/>
        `
      }

      const locationMarker = <LocationOn
        id={id}
        style={{fontSize: '2em', color: yellow[400], cursor: 'pointer'}}
        onClick={this.makeMarkerClickHandler(pointOptions)}
      />

      const locationMarkerContainer = document.createElement('div')
      ReactDOM.render(locationMarker, locationMarkerContainer)
      return ({
        ...pointOptions,
        element: locationMarkerContainer,
      })
    })
  }

  onPopoverClose = () => {
    this.setState({dialogOpen: false})
  }

  render() {
    return (
      <>
        <Typography variant={'h2'}>Amerasia Map</Typography>
        <div ref={this.container} id={'test'} style={{height: '80vh', width: '100vw'}}/>
        <Dialog
          open={this.state.dialogOpen}
          onClose={this.onPopoverClose}
          BackdropProps={{invisible: true}}
        >
          <div dangerouslySetInnerHTML={{__html: this.state.selectedHtml}} />
        </Dialog>
      </>
    )
  }
}

