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

  generateOverlays = (size) => {
    return Array(size).fill(0).map((_, i) => {

      const locationMarker = <LocationOn
        id={`location-marker-${i}`}
        style={{fontSize: '2em', color: yellow[400], cursor: 'pointer'}}
        onClick={() => {this.props.history.push(`/location-marker-${i}`)}}
      />

      const locationMarkerContainer = document.createElement('div')
      ReactDOM.render(locationMarker, locationMarkerContainer)
      return ({
        element: locationMarkerContainer,
        x: (Math.random() * 0.8) + 0.2,
        y: (Math.random() * 0.5),
        placement: OpenSeadragon.Placement.CENTER,
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

