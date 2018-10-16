import {yellow} from '@material-ui/core/colors'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import OpenSeadragon from 'openseadragon'
import LocationOn from '@material-ui/icons/LocationOn'


const generateOverlays = (size) => {
  return Array(size).fill(0).map(() => {
    const arrowContainer = document.createElement('div')
    ReactDOM.render(<LocationOn style={{fontSize: '2em', color: yellow[400]}}/>, arrowContainer)
    return ({
      element: arrowContainer,
      x: (Math.random() * 0.8) + 0.2,
      y: (Math.random() * 0.5),
      placement: OpenSeadragon.Placement.CENTER,
    })
  })
}

export class Map extends Component {
  container = React.createRef()

  componentDidMount() {
    const overlays = generateOverlays(10)
    console.log(overlays)
    this.viewer = OpenSeadragon({
      element: this.container.current,
      prefixUrl: `${process.env.PUBLIC_URL}/tiles_files/`,
      tileSources: `${process.env.PUBLIC_URL}/tiles.dzi`,
      overlays: overlays,
    })
  }

  render() {
    return (
      <div ref={this.container} id={'test'} style={{height: '80vh', width: '100vw'}}/>
    )
  }
}

