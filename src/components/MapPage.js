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
import cx from 'classnames';
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
  highlightedIcon: {
    color: theme.palette.secondary.main
  },
  drawerPaper: {
    zIndex: 1, // so it appears below the NavBar
    width: drawerWidthSm,
    height: '50vh',
    padding: theme.spacing(2),

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
  },
  articleContainer: {
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto'
  },
  pinTooltip: {
    background: theme.palette.background.default,
    color: theme.palette.text.primary
  }
});

const articleUrls = new Set(DATA.map(d => d.id));

export class MapPage extends Component {
  container = React.createRef();
  articleContainer = React.createRef();

  state = {
    drawerOpen: false,
    showPins: true,
    selectedHtml: '',
    welcomeDialogOpen: true
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
      removePinButton: 'toggle-pin-button'
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
      // HACK: only reset zoom if the hash url is an actual article url and not an anchor tag
      if (articleUrls.has(this.props.match.params.id)) {
        this.articleContainer.current.scrollTop = 0; // reset the scroll inside the Drawer
      }

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

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false;
  }

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
    const {classes} = this.props;

    return DATA.map(point => {
      const clickHandler = this.makeMarkerClickHandler(point);
      const locationMarker = (
        <Tooltip title={point.pinTooltip || point.title} classes={{tooltip: classes.pinTooltip}}>
          <IconButton className={'locationPin'} id={point.id} aria-label={point.id} onClick={clickHandler}>
            <LocationOn
              style={{
                fontSize: '.7em',
                color: point.pinColor || yellow[400],
                cursor: 'pointer'
              }}
            />
          </IconButton>
        </Tooltip>
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

  togglePins = () => {
    this.setState(
      state => ({
        showPins: !state.showPins
      }),
      () => {
        document.querySelectorAll(`.locationPin`).forEach(elem => {
          elem.style.display = this.state.showPins ? 'block' : 'none';
        });
      }
    );
  };

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

  closeWelcomeDialog = () => {
    this.setState({welcomeDialogOpen: false});
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
              <Tooltip title={this.state.showPins ? 'Hide Pins' : 'Show Pins'} placement={'left'}>
                <ButtonBase
                  onClick={this.togglePins}
                  className={classes.actionButton}
                  id={'toggle-pin-button'}
                  aria-label={'toggle pins'}
                >
                  <Place
                    className={cx({
                      [classes.icon]: true,
                      [classes.highlightedIcon]: !this.state.showPins
                    })}
                  />
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
          <div
            className={classes.articleContainer}
            ref={this.articleContainer}
            dangerouslySetInnerHTML={{__html: this.state.selectedHtml}}
          />
        </Drawer>
      </>
    );
  }
}

export default flow([withWidth(), withStyles(styles, {withTheme: true})])(MapPage);
