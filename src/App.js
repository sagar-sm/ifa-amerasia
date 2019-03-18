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
import {HashRouter, Route, Switch} from 'react-router-dom';
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
            </>
          </HashRouter>
          <Dialog open={this.state.welcomeDialogOpen} onClose={this.closeWelcomeDialog}>
            <DialogTitle>Amerasia</DialogTitle>
            <DialogContent>
              <DialogContentText>
                By considering texts, maps, objects, and images produced between 1450 and 1700, Amerasia: A Renaissance
                Discovery will reveal that the association of America and Asia dominated the geographical imagination of
                Europe for over a century after 1492.
              </DialogContentText>
              <DialogContentText>
                The Amerasia project is composed primarily of an interactive map, and a navigational menu to multiple
                pages. Readers interact with this extremely detailed/high resolution scan (24,000 x 16,000 pixels)and
                access pin points which open content boxes. The content is cross referenced with other points on the
                same map.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Grid container justify={'center'}>
                <Button variant={'raised'} color={'primary'} onClick={this.closeWelcomeDialog}>
                  Explore
                </Button>
              </Grid>
            </DialogActions>
          </Dialog>
        </MuiThemeProvider>
      </>
    );
  }
}

export default App;
