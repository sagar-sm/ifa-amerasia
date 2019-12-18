import {makeStyles} from '@material-ui/core';
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
import {find} from 'lodash';
import OpenSeadragon from 'openseadragon';
import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import {DATA} from '../data';
import {useWidth} from '../useWidth';
import {headerHeight} from './NavBar';

const IMMEDIATE_PAN_NAVIGATION = false;

const drawerWidth = 500;
const drawerWidthMd = 350;
const drawerWidthSm = '100vw';

const useStyles = makeStyles(theme => ({
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
}));

const articleUrls = new Set(DATA.map(d => d.id));

let viewer;

export default function MapPage(props) {
  const classes = useStyles();
  const width = useWidth();

  const containerRef = useRef();
  const articleContainerRef = useRef();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showPins, setShowPins] = useState(true);
  const [selectedHtml, setSelectedHtml] = useState('');

  useEffect(() => {
    viewer = OpenSeadragon({
      element: containerRef.current,
      prefixUrl: `${process.env.PUBLIC_URL}/map/vopel_files/`,
      tileSources: `${process.env.PUBLIC_URL}/map/vopel.dzi`,
      overlays: createOverlaysFromData(),
      zoomInButton: 'zoom-in-button',
      zoomOutButton: 'zoom-out-button',
      homeButton: 'home-button',
      removePinButton: 'toggle-pin-button'
    });
    viewer.viewport.minZoomLevel = 0.5;
    viewer.gestureSettingsMouse.clickToZoom = false;
    viewer.gestureSettingsMouse.dblClickToZoom = true; // added by Jason to create double click zoom capability

    if (props.match.params.id) {
      const point = find(DATA, {id: props.match.params.id});
      if (point) {
        setTimeout(() => navigateTo(point), 700);
      }
    }
  }, []);

  useEffect(() => {
    // HACK: only reset zoom if the hash url is an actual article url and not an anchor tag
    if (articleUrls.has(props.match.params.id)) {
      articleContainerRef.current.scrollTop = 0; // reset the scroll inside the Drawer
    }

    const point = find(DATA, {id: props.match.params.id});
    if (point && viewer) {
      navigateTo(point);
    }
  }, [props.match.params.id]);

  function navigateTo(point) {
    const target = new OpenSeadragon.Point(point.x, point.y);
    viewer.viewport.panTo(target, IMMEDIATE_PAN_NAVIGATION);
    // Timeout to cancel out race condition with zoom animation
    setTimeout(() => {
      viewer.viewport.zoomTo(9, target);
    }, 700);

    setDrawerOpen(true);
    setSelectedHtml(point.html);
  }

  const makeMarkerClickHandler = point => () => {
    history.pushState(null, null, `#${point.id}`);
    navigateTo(point);
  };

  const focusPointOnMap = () => {
    const point = find(DATA, {id: props.match.params.id});
    if (point) {
      navigateTo(point);
    }
  };

  const createOverlaysFromData = () => {
    return DATA.map(point => {
      const clickHandler = makeMarkerClickHandler(point);
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

  const togglePins = () => {
    setShowPins(prevState => !prevState);
    document.querySelectorAll(`.locationPin`).forEach(elem => {
      elem.style.display = showPins ? 'block' : 'none';
    });
  };

  const onDrawerClose = () => {
    setDrawerOpen(false);
    history.pushState(null, null, '#');
  };

  const calcMapDimensions = () => {
    if (!drawerOpen) {
      return {
        width: '100vw',
        height: `calc(100vh - ${headerHeight}px)`
      };
    }

    const height = isWidthUp('sm', width) ? `calc(100vh - ${headerHeight}px)` : `calc(50vh - ${headerHeight}px)`;

    if (isWidthUp('sm', width)) {
      return {
        width: `calc(100vw - ${drawerWidthMd}px)`,
        height
      };
    } else if (isWidthUp('md', width)) {
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

  return (
    <>
      <div ref={containerRef} className={classes.mapContainer} style={calcMapDimensions()}>
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
            <Tooltip title={showPins ? 'Hide Pins' : 'Show Pins'} placement={'left'}>
              <ButtonBase
                onClick={togglePins}
                className={classes.actionButton}
                id={'toggle-pin-button'}
                aria-label={'toggle pins'}
              >
                <Place
                  className={cx({
                    [classes.icon]: true,
                    [classes.highlightedIcon]: !showPins
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
        open={drawerOpen}
        onClose={onDrawerClose}
        BackdropProps={{invisible: true}}
        classes={{paper: classes.drawerPaper}}
      >
        <Grid container justify={'flex-end'}>
          <Grid item>
            <Tooltip title={'Locate on map '}>
              <ButtonBase className={classes.actionButton} aria-label={'Locate on map'} onClick={focusPointOnMap}>
                <MyLocation className={classes.icon} />
              </ButtonBase>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title={'Close'}>
              <ButtonBase className={classes.actionButton} aria-label={'Close sidebar'} onClick={onDrawerClose}>
                <Close className={classes.icon} />
              </ButtonBase>
            </Tooltip>
          </Grid>
        </Grid>
        <div
          className={classes.articleContainer}
          ref={articleContainerRef}
          dangerouslySetInnerHTML={{__html: selectedHtml}}
        />
      </Drawer>
    </>
  );
}
