import React, {Component} from 'react'
import OpenSeadragon from 'openseadragon'

export class Map extends Component {
  container = React.createRef()

  componentDidMount() {
    OpenSeadragon({
      element: this.container.current,
      prefixUrl: `/${process.env.PUBLIC_URL}/tiles_files/`,
      tileSources: '/tiles.dzi',
    })
  }

  render() {
    return (
      <div ref={this.container} id={'test'} style={{height: 1000, width: '80vw'}}/>
    )
  }
}

