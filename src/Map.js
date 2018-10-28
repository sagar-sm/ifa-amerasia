import {withStyles} from '@material-ui/core'
import {yellow} from '@material-ui/core/colors'
import Drawer from '@material-ui/core/Drawer/Drawer'
import LocationOn from '@material-ui/icons/LocationOn'
import OpenSeadragon from 'openseadragon'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {headerHeight} from './NavBar'
import {DATA} from './data'

const styles = (theme) => ({
  drawerPaper: {
    marginTop: headerHeight,
    width: 500,
  }
})

export class Map extends Component {
  container = React.createRef()

  state = {
    drawerOpen: false,
    selectedHtml: '',
  }

  componentDidMount() {
    this.viewer = OpenSeadragon({
      element: this.container.current,
      prefixUrl: `${process.env.PUBLIC_URL}/tiles_files/`,
      tileSources: `${process.env.PUBLIC_URL}/tiles.dzi`,
      overlays: this.generateOverlays(),
      zoomPerClick: 1, // disable zoom on click
    })
    this.viewer.viewport.minZoomLevel = 0.5
  }

  makeMarkerClickHandler = (point) => () => {
    this.props.history.push(point.id)
    const target = new OpenSeadragon.Point(point.x, point.y)
    this.viewer.viewport.zoomTo(2, target)
    this.viewer.viewport.panTo(target)
    console.log(point)
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
    const {classes} = this.props
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
        <Drawer
          variant={'persistent'}
          anchor={'right'}
          open={this.state.drawerOpen}
          onClose={this.onDrawerClose}
          BackdropProps={{invisible: true}}
          classes={{paper: classes.drawerPaper}}
        >
          <div dangerouslySetInnerHTML={{__html: this.state.selectedHtml}}/>
        </Drawer>
      </>
    )
  }
}

export default withStyles(styles)(Map)