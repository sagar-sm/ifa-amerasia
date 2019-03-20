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
          <HashRouter basename={process.env.PUBLIC_URL} hashType={'noslash'}>
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
                    By considering texts, maps, objects, and images produced between 1450 and 1700,{' '}
                    <i>Amerasia: A Renaissance Discovery</i> will reveal that the association of America and Asia
                    dominated the geographical imagination of Europe for over a century after 1492.
                  </DialogContentText>
                  &nbsp; &nbsp;
                  <DialogContentText>
                    The website is composed primarily of an interactive high definition map. Two different types of
                    removable pins appear on the map: blue pins indicate translated cartouches and yellow pins indicate
                    longer essays. Pins are removable using the controls in the upper left hand corner.
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
