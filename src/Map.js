import {yellow} from '@material-ui/core/colors'
import Dialog from '@material-ui/core/Dialog/Dialog'
import Typography from '@material-ui/core/Typography/Typography'
import LocationOn from '@material-ui/icons/LocationOn'
import loremIpsum from 'lorem-ipsum'
import OpenSeadragon from 'openseadragon'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ArticleDrawer from './ArticleDrawer'

export class Map extends Component {
  container = React.createRef()

  state = {
    drawerOpen: true,
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
    this.viewer.viewport.minZoomLevel = 0.5
  }

  makeMarkerClickHandler = (point) => () => {
    this.props.history.push(point.id)
    const target = new OpenSeadragon.Point(point.x, point.y)
    this.viewer.viewport.zoomTo(3, target)
    this.viewer.viewport.panTo(target)
    this.setState({
      drawerOpen: true,
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
          <h1 class="heading">Lorem Ipsum</h1>
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

  onDrawerClose = () => {
    this.setState({drawerOpen: false})
  }

  render() {
    return (
      <>
        <div ref={this.container} id={'test'} style={{height: 'calc(100vh - 64px)', width: '100%'}}/>
        <ArticleDrawer
          open={this.state.drawerOpen}
          onClose={this.onDrawerClose}
          BackdropProps={{invisible: true}}
        >
          <div dangerouslySetInnerHTML={{__html: this.state.selectedHtml}} />
        </ArticleDrawer>
      </>
    )
  }
}

