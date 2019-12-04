import {Typography, withStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import {yellow} from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid/Grid';
import LocationOn from '@material-ui/icons/LocationOn';
import {round} from 'lodash';
import OpenSeadragon from 'openseadragon';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {headerHeight} from './NavBar';

const styles = theme => ({
  mapContainer: {
    width: '80vw',
    height: `calc(100vh - ${headerHeight}px)`
  },
  debugContainer: {
    width: '20vw',
    padding: 2 * theme.spacing.unit,
    borderLeft: `2px solid ${theme.palette.grey[300]}`
  },
  pre: {
    fontFamily: 'monospace'
  }
});

class MapDebugPage extends Component {
  container = React.createRef();
  state = {
    coordinates: '',
    frozen: false
  };

  componentDidMount() {
    this.viewer = OpenSeadragon({
      element: this.container.current,
      prefixUrl: `${process.env.PUBLIC_URL}/map/vopel_files/`,
      tileSources: `${process.env.PUBLIC_URL}/map/vopel.dzi`,
      zoomInButton: 'zoom-in-button',
      zoomOutButton: 'zoom-out-button',
      homeButton: 'home-button',
      clickHandler: this.onClick
    });
    this.viewer.addHandler('canvas-click', this.onClick);
    this.viewer.viewport.minZoomLevel = 0.5;
    this.viewer.gestureSettingsMouse.clickToZoom = false;

    new OpenSeadragon.MouseTracker({
      element: this.container.current,
      moveHandler: this.onMouseTrackerMove
    }).setTracking(true);
  }

  getNormalizedPointCoords = event => new OpenSeadragon.Point(event.position.x, event.position.y + headerHeight);

  onMouseTrackerMove = event => {
    const normalizedPoint = this.getNormalizedPointCoords(event);
    const viewportPoint = this.viewer.viewport.windowToViewportCoordinates(normalizedPoint);
    if (!this.state.frozen) {
      this.setState({
        coordinates: `{\n  x: ${round(viewportPoint.x, 3)},\n  y: ${round(viewportPoint.y, 3)},\n}`
      });
    }
  };

  onClick = event => {
    if (!this.overlay) {
      const locationMarker = <LocationOn style={{color: yellow[400]}} />;

      this.overlay = document.createElement('div');
      ReactDOM.render(locationMarker, this.overlay);

      // normalize mouse coordinates
      const normalizedPoint = this.getNormalizedPointCoords(event);

      this.viewer.addOverlay(
        this.overlay,
        this.viewer.viewport.windowToViewportCoordinates(normalizedPoint),
        OpenSeadragon.Placement.CENTER
      );
      this.setState({frozen: true});
    } else {
      this.unfreeze();
    }
  };

  unfreeze = () => {
    this.viewer.removeOverlay(this.overlay);
    this.overlay = null;
    this.setState({frozen: false});
  };

  render() {
    const {classes} = this.props;
    return (
      <>
        <Grid container>
          <div ref={this.container} id={'test'} className={classes.mapContainer} />
          <div className={classes.debugContainer}>
            <Typography variant={'subtitle1'}>Debug Mode</Typography>
            <Typography variant={'caption'}>
              Click map to drop a pin. Use the + and - keys to zoom in and out, and your mouse or the arrow keys to pan.
              Use the maximum zoom level before clicking for the most accurate position.
            </Typography>
            <pre className={classes.pre}>{this.state.coordinates}</pre>
            {this.state.frozen && (
              <Button size={'small'} onClick={this.unfreeze}>
                Reset pin
              </Button>
            )}
          </div>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(MapDebugPage);
