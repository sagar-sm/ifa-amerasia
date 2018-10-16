import {yellow} from '@material-ui/core/colors'
import Typography from '@material-ui/core/Typography/Typography'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import OpenSeadragon from 'openseadragon'
import LocationOn from '@material-ui/icons/LocationOn'


export class Map extends Component {
  container = React.createRef()

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
  }

  generateOverlays = (size) => {
    return Array(size).fill(0).map((_, i) => {

      const id = `location-marker-${i}`
      const pointOptions = {
        id,
        x: (Math.random() * 0.8) + 0.2,
        y: (Math.random() * 0.5),
        placement: OpenSeadragon.Placement.CENTER,
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

  render() {
    return (
      <>
        <Typography variant={'h2'}>Amerasia Map</Typography>
        <div ref={this.container} id={'test'} style={{height: '80vh', width: '100vw'}}/>
      </>
    )
  }
}

