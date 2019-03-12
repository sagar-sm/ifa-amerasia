import {withStyles, withWidth} from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase/ButtonBase';
import {yellow} from '@material-ui/core/colors';
import Drawer from '@material-ui/core/Drawer/Drawer';
import Grid from '@material-ui/core/Grid/Grid';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import {isWidthUp} from '@material-ui/core/withWidth';
import Close from '@material-ui/icons/Close';
import LocationOn from '@material-ui/icons/LocationOn';
import MyLocation from '@material-ui/icons/MyLocation';
import Place from '@material-ui/icons/Place';
import ZoomIn from '@material-ui/icons/ZoomIn';
import ZoomOut from '@material-ui/icons/ZoomOut';
import ZoomOutMap from '@material-ui/icons/ZoomOutMap';
import {find, flow} from 'lodash';
import OpenSeadragon from 'openseadragon';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {DATA} from '../data';
import {headerHeight} from './NavBar';

const IMMEDIATE_PAN_NAVIGATION = false;

const drawerWidth = 500;
const drawerWidthMd = 350;
const drawerWidthSm = '100vw';

const styles = theme => ({
  buttons: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    zIndex: theme.zIndex.appBar
  },
  actionButton: {
    width: 28,
    height: 28,
    padding: 4,
    margin: 4,
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(['background']),
    background: 'rgba(255, 255, 255, 0.7)',
    '&:hover': {
      background: 'rgba(255, 255, 255, 1)'
    }
  },
  icon: {
    width: 20,
    height: 20
  },
  drawerPaper: {
    width: drawerWidthSm,
    height: '50vh',
    padding: 2 * theme.spacing.unit,
    paddingBottom: 100,

    [theme.breakpoints.up('sm')]: {
      width: drawerWidthMd,
      marginTop: headerHeight,
      height: `calc(100vh - ${headerHeight}px)`
    },

    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      marginTop: headerHeight,
      height: `calc(100vh - ${headerHeight}px)`
    }
  },
  mapContainer: {
    background: '#4c221a',
    transition: theme.transitions.create(['width', 'height'])
  }
});

export class MapPage extends Component {
  container = React.createRef();

  state = {
    drawerOpen: false,
    selectedHtml: ''
  };

  componentDidMount() {
    this.viewer = OpenSeadragon({
      element: this.container.current,
      prefixUrl: `${process.env.PUBLIC_URL}/map/vopel_files/`,
      tileSources: `${process.env.PUBLIC_URL}/map/vopel.dzi`,
      overlays: this.createOverlaysFromData(),
      zoomInButton: 'zoom-in-button',
      zoomOutButton: 'zoom-out-button',
      homeButton: 'home-button',
      removePinButton: 'remove-pin-button' // added by Jason to create for Remove Pin button
    });
    this.viewer.viewport.minZoomLevel = 0.5;
    this.viewer.gestureSettingsMouse.clickToZoom = false;
    this.viewer.gestureSettingsMouse.dblClickToZoom = true; // added by Jason to create double click zoom capability

    if (this.props.match.params.id) {
      const point = find(DATA, {id: this.props.match.params.id});
      if (point) {
        setTimeout(() => this.navigateTo(point), 700);
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const point = find(DATA, {id: this.props.match.params.id});
      if (point) {
        this.navigateTo(point);
      }
    }
  }

  navigateTo = point => {
    const target = new OpenSeadragon.Point(point.x, point.y);
    this.viewer.viewport.panTo(target, IMMEDIATE_PAN_NAVIGATION);
    // Timeout to cancel out race condition with zoom animation
    setTimeout(() => {
      this.viewer.viewport.zoomTo(9, target);
    }, 700);
    this.setState({
      drawerOpen: true,
      selectedHtml: point.html
    });
  };

  makeMarkerClickHandler = point => () => {
    if (this.props.match.params.id !== point.id) {
      this.props.history.push(point.id);
    }
  };

  focusPointOnMap = () => {
    const point = find(DATA, {id: this.props.match.params.id});
    if (point) {
      this.navigateTo(point);
    }
  };

  createOverlaysFromData = () => {
    return DATA.map(point => {
      const clickHandler = this.makeMarkerClickHandler(point);

      const locationMarker = (
        <IconButton className={'overlay'} id={point.id} aria-label={point.id} onClick={clickHandler}>
          <LocationOn style={{fontSize: '1em', color: yellow[400], cursor: 'pointer'}} />
        </IconButton>
      );

      const locationMarkerContainer = document.createElement('div');
      ReactDOM.render(locationMarker, locationMarkerContainer);

      // Note: we only need this for mobile support for now
      new OpenSeadragon.MouseTracker({
        element: locationMarkerContainer,
        clickHandler: clickHandler
      });

      return {
        ...point,
        placement: OpenSeadragon.Placement.CENTER,
        element: locationMarkerContainer
      };
    });
  };

  // Added by Jason to create function to remove/clear pins
  togglePins = () => {};

  onDrawerClose = () => {
    this.setState({drawerOpen: false});
    this.props.history.push('/');
  };

  calcMapDimensions = () => {
    if (!this.state.drawerOpen) {
      return {
        width: '100vw',
        height: `calc(100vh - ${headerHeight}px)`
      };
    }

    const height = isWidthUp('sm', this.props.width)
      ? `calc(100vh - ${headerHeight}px)`
      : `calc(50vh - ${headerHeight}px)`;

    if (isWidthUp('sm', this.props.width)) {
      return {
        width: `calc(100vw - ${drawerWidthMd}px)`,
        height
      };
    } else if (isWidthUp('md', this.props.width)) {
      return {
        width: `calc(100vw - ${drawerWidth}px)`,
        height
      };
    }

    return {
      width: drawerWidthSm,
      height
    };
  };

  render() {
    const {classes, width} = this.props;
    return (
      <>
        <div ref={this.container} className={classes.mapContainer} style={this.calcMapDimensions()}>
          <div className={classes.buttons}>
            <Grid container direction={'column'}>
              <Tooltip title={'Zoom In'} placement={'left'}>
                <ButtonBase className={classes.actionButton} id={'zoom-in-button'} aria-label={'zoom-in'}>
                  <ZoomIn className={classes.icon} />
                </ButtonBase>
              </Tooltip>
              <Tooltip title={'Zoom Out'} placement={'left'}>
                <ButtonBase className={classes.actionButton} id={'zoom-out-button'} aria-label={'zoom-out'}>
                  <ZoomOut className={classes.icon} />
                </ButtonBase>
              </Tooltip>
              <Tooltip title={'Reset Zoom'} placement={'left'}>
                <ButtonBase className={classes.actionButton} id={'home-button'} aria-label={'home'}>
                  <ZoomOutMap className={classes.icon} />
                </ButtonBase>
              </Tooltip>
              <Tooltip title={'Remove Pins'} placement={'left'}>
                <ButtonBase
                  onClick={this.togglePins}
                  className={classes.actionButton}
                  id={'remove-pin-button'}
                  aria-label={'remove-pins'}
                >
                  <Place className={classes.icon} />
                </ButtonBase>
              </Tooltip>
            </Grid>
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
          <Grid container justify={'flex-end'}>
            <Grid item>
              <Tooltip title={'Locate on map '}>
                <ButtonBase
                  className={classes.actionButton}
                  aria-label={'Locate on map'}
                  onClick={this.focusPointOnMap}
                >
                  <MyLocation className={classes.icon} />
                </ButtonBase>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title={'Close'}>
                <ButtonBase className={classes.actionButton} aria-label={'Close sidebar'} onClick={this.onDrawerClose}>
                  <Close className={classes.icon} />
                </ButtonBase>
              </Tooltip>
            </Grid>
          </Grid>
          <div id='ArticleContainer' dangerouslySetInnerHTML={{__html: this.state.selectedHtml}} />
        </Drawer>
      </>
    );
  }
}

export default flow([withWidth(), withStyles(styles, {withTheme: true})])(MapPage);
