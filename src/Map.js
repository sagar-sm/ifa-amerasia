import {withStyles, withWidth} from '@material-ui/core'
import {yellow} from '@material-ui/core/colors'
import Drawer from '@material-ui/core/Drawer/Drawer'
import IconButton from '@material-ui/core/IconButton/IconButton'
import Tooltip from '@material-ui/core/Tooltip/Tooltip'
import {isWidthUp} from '@material-ui/core/withWidth'
import LocationOn from '@material-ui/icons/LocationOn'
import ZoomIn from '@material-ui/icons/ZoomIn'
import ZoomOut from '@material-ui/icons/ZoomOut'
import ZoomOutMap from '@material-ui/icons/ZoomOutMap'
import {find, flow} from 'lodash'
import OpenSeadragon from 'openseadragon'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {DATA} from './data'
import {headerHeight} from './NavBar'

const drawerWidth = 500

const styles = (theme) => ({
  buttons: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    // marginTop: headerHeight + theme.spacing.unit,
    zIndex: theme.zIndex.appBar,
  },
  actionButton: {

    margin: 4,
    transition: theme.transitions.create(['background']),
    background: 'rgba(255, 255, 255, 0.7)',
    '&:hover': {
      background: 'rgba(255, 255, 255, 1)',
    }
  },
  icon: {
    width: 20,
    height: 20,
  },
  drawerPaper: {
    width: '100vw',
    height: '50vh',
    padding: 2 * theme.spacing.unit,
    marginTop: 0,
    paddingBottom: 100,
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
    canvasHovered: false,
  }

  componentDidMount() {
    this.viewer = OpenSeadragon({
      element: this.container.current,
      prefixUrl: `${process.env.PUBLIC_URL}/tiles_files/`,
      tileSources: `${process.env.PUBLIC_URL}/tiles.dzi`,
      overlays: this.createOverlaysFromData(),
      zoomInButton: 'zoom-in-button',
      zoomOutButton: 'zoom-out-button',
      homeButton: 'home-button',
    })
    this.viewer.viewport.minZoomLevel = 0.5
    this.viewer.gestureSettingsMouse.clickToZoom = false;

    if (this.props.match.params.id) {
      const point = find(DATA, {id: this.props.match.params.id})
      if (point) {
        setTimeout(() => this.navigateTo(point), 700)
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const point = find(DATA, {id: this.props.match.params.id})
      if (point) {
        this.navigateTo(point)
      }
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

  makeMarkerClickHandler = (point) => (event) => {
    // event.preventDefault()
    // event.stopPropagation()
    if (this.props.match.params.id !== point.id) {
      this.props.history.push(point.id)
    }
  }

  createOverlaysFromData = () => {
    return DATA.map((point) => {
      const locationMarker = (
        <IconButton id={point.id} aria-label={point.id}>
          <LocationOn style={{fontSize: '1.2em', color: yellow[400], cursor: 'pointer'}}/>
        </IconButton>
      )

      const locationMarkerContainer = document.createElement('div')
      ReactDOM.render(locationMarker, locationMarkerContainer)

      new OpenSeadragon.MouseTracker({
        element: locationMarkerContainer,
        clickHandler: this.makeMarkerClickHandler(point),
      })

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

  onCanvasEnter = () => {
    this.setState({canvasHovered: true})
  }

  onCanvasLeave = () => {
    this.setState({canvasHovered: false})
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
          onMouseEnter={this.onCanvasEnter}
          onMouseLeave={this.onCanvasLeave}
        >
          <div className={classes.buttons} style={{opacity: this.state.canvasHovered ? 1 : 0}}>
            <Tooltip title={'Zoom In'}>
              <IconButton className={classes.actionButton} id={'zoom-in-button'} aria-label={'zoom-in'}>
                <ZoomIn className={classes.icon}/>
              </IconButton>
            </Tooltip>
            <Tooltip title={'Zoom Out'}>
              <IconButton className={classes.actionButton} id={'zoom-out-button'} aria-label={'zoom-out'}>
                <ZoomOut className={classes.icon}/>
              </IconButton>
            </Tooltip>
            <Tooltip title={'Reset Zoom'}>
              <IconButton className={classes.actionButton} id={'home-button'} aria-label={'home'}>
                <ZoomOutMap className={classes.icon}/>
              </IconButton>
            </Tooltip>
          </div>
        </div>
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
