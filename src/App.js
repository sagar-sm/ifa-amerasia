import {
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  MuiThemeProvider
} from '@material-ui/core';
import {createHashHistory} from 'history';
import React, {Component} from 'react';
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import './base.css';
import AboutPage from './components/AboutPage';
import AccessibilityPage from './components/AccessibilityPage';
import CreditsPage from './components/CreditsPage';
import MapDebugPage from './components/MapDebugPage';
import MapPage from './components/MapPage';
import NavBar from './components/NavBar';
import {theme} from './theme';

const lsKey = 'welcomeDialogLastSeen';
const history = createHashHistory();
class App extends Component {
  state = {
    welcomeDialogOpen: false
  };

  componentDidMount() {
    const MIN_INTERVAL = 300000; // milliseconds = 5 minutes
    const lastSeen = Number(window.localStorage.getItem(lsKey)) || 0;

    // Only show welcome dialog if the page MIN_INTERVAL time has elapsed since the last time you saw the dialog
    if (Date.now() - lastSeen > MIN_INTERVAL) {
      this.setState({
        welcomeDialogOpen: true
      });
      window.localStorage.setItem(lsKey, Date.now().toString());
    }
  }

  closeWelcomeDialog = () => {
    window.localStorage.setItem(lsKey, Date.now().toString());
    this.setState({welcomeDialogOpen: false});
  };

  render() {
    return (
      <>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <HashRouter hashType={'noslash'} history={history}>
            <>
              <NavBar />
              <Switch>
                <Route exact path={'/'} component={MapPage} />
                <Route exact path={'/debug'} component={MapDebugPage} />
                <Route exact path={'/about'} component={AboutPage} />
                <Route exact path={'/credits'} component={CreditsPage} />
                <Route exact path={'/accessibility'} component={AccessibilityPage} />

                {/* IMPORTANT NOTE: This route MUST be at the end */}
                <Route exact path={'/:id'} component={MapPage} />
              </Switch>
              <Dialog open={this.state.welcomeDialogOpen} onClose={this.closeWelcomeDialog}>
                <DialogTitle>
                  <img src={'amerasia-logo-black.png'} width={200} />
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    In 1545, the German mathematician and cartographer Caspar Vopel (1511-1561) designed a famous and
                    influential map of the world, <i>A New Complete and Universal Description of the Whole World</i>{' '}
                    that depicts Asia and America overlapping on the same landmass.
                  </DialogContentText>
                  &nbsp; &nbsp;
                  <DialogContentText>
                    Using an interactive, high-definition interface, this website explores the map’s content. Blue pins
                    indicate translated cartouches, and pink pins offer more extended essays pegged to sites with
                    particular Amerasian significance. To explore the map without the pins, please use the controls in
                    the upper left-hand corner of the home page.
                  </DialogContentText>
                </DialogContent>

                <DialogActions>
                  <Grid container justify={'center'}>
                    <Link to={'/'} style={{textDecoration: 'none'}}>
                      <Button color={'textPrimary'} onClick={this.closeWelcomeDialog}>
                        Explore the Map
                      </Button>
                    </Link>
                    &nbsp; &nbsp;
                    <Link to={'/about'} style={{textDecoration: 'none'}}>
                      <Button onClick={this.closeWelcomeDialog}>Read More about the Project</Button>
                    </Link>
                  </Grid>
                </DialogActions>
              </Dialog>
            </>
          </HashRouter>
        </MuiThemeProvider>
      </>
    );
  }
}

export default App;
