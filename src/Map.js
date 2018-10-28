import {yellow} from '@material-ui/core/colors'
import LocationOn from '@material-ui/icons/LocationOn'
import OpenSeadragon from 'openseadragon'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ArticleDrawer from './ArticleDrawer'
import {headerHeight} from './NavBar'
import {DATA} from './data'

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
    this.viewer.viewport.zoomTo(2, target)
    this.viewer.viewport.panTo(target)
    this.setState({
      drawerOpen: true,
      selectedHtml: point.html,
    })
  }

  generateOverlays = () => {
    return DATA.map((point) => {
      const locationMarker = <LocationOn
        id={point.id}
        style={{fontSize: '2em', color: yellow[400], cursor: 'pointer'}}
        onClick={this.makeMarkerClickHandler(point)}
      />

      const locationMarkerContainer = document.createElement('div')
      ReactDOM.render(locationMarker, locationMarkerContainer)
      return ({
        ...point,
        placement: OpenSeadragon.Placement.CENTER,
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
        <div
          ref={this.container}
          id={'test'}
          style={{
            height: `calc(100vh - ${headerHeight}px)`,
            marginTop: headerHeight,
            width: '100%',
          }}
        />
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

