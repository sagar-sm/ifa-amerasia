import {withStyles, withWidth} from '@material-ui/core'
import {yellow} from '@material-ui/core/colors'
import Drawer from '@material-ui/core/Drawer/Drawer'
import {isWidthUp} from '@material-ui/core/withWidth'
import LocationOn from '@material-ui/icons/LocationOn'
import OpenSeadragon from 'openseadragon'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {headerHeight} from './NavBar'
import {DATA} from './data'
import {get, flow, find, debounce} from 'lodash'

const drawerWidth = 500

const styles = (theme) => ({
  drawerPaper: {
    width: '100vw',
    height: '50vh',
    marginTop: 0,
  },
  mapContainer: {
    width: `100vw`,
    height: '50vh',
  },

  // Large screens
  [theme.breakpoints.up('sm')]: {
    drawerPaper: {
      marginTop: headerHeight,
      width: drawerWidth,
      height: '100vh',
    },
    mapContainer: {
      height: `calc(100vh - ${headerHeight}px)`,
      marginTop: headerHeight,
      transition: theme.transitions.create(['width'])
    },
  },
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

    if (this.props.match.params.id) {
      const point = find(DATA, {id: this.props.match.params.id})
      this.navigateTo(point)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const point = find(DATA, {id: this.props.match.params.id})
      this.navigateTo(point)
    }
  }

  navigateTo = (point) => {
    const target = new OpenSeadragon.Point(point.x, point.y)
    this.viewer.viewport.zoomTo(2, target)
    this.viewer.viewport.panTo(target)
    this.setState({
      drawerOpen: true,
      selectedHtml: point.html,
    })
  }


  makeMarkerClickHandler = (point) => () => {
    this.props.history.push(point.id)
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
    const {classes, width} = this.props
    return (
      <>
        <div
          ref={this.container}
          id={'test'}
          className={classes.mapContainer}
          style={{
            width: isWidthUp('sm', width) && this.state.drawerOpen
              ? `calc(100vw - ${drawerWidth}px`
              : '100vw'
          }}
        />
        <Drawer
          variant={'persistent'}
          anchor={isWidthUp('sm', width) ? 'right' : 'bottom'}
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

export default flow([
  withWidth(),
  withStyles(styles, {withTheme: true})
])(Map)
