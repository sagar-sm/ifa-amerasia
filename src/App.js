import {CssBaseline, MuiThemeProvider} from '@material-ui/core'
import React, {Component} from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import './base.css'
import AboutPage from './components/AboutPage'
import AccessibilityPage from './components/AccessibilityPage'
import CreditsPage from './components/CreditsPage'
import MapDebugPage from './components/MapDebugPage'
import MapPage from './components/MapPage'
import NavBar from './components/NavBar'
import {theme} from './theme'

class App extends Component {
  render() {
    return (
      <>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          <HashRouter hashType={'noslash'}>
            <Switch>
              <Route exact path={'/'} component={MapPage} />
              <Route exact path={'/debug'} component={MapDebugPage} />
              <Route exact path={'/about'} component={AboutPage} />
              <Route exact path={'/credits'} component={CreditsPage} />
              <Route exact path={'/accessibility'} component={AccessibilityPage} />

              {/* IMPORTANT NOTE: This route MUST be at the end */}
              <Route exact path={'/:id'} component={MapPage} />
            </Switch>
          </HashRouter>
        </MuiThemeProvider>
      </>
    )
  }
}

export default App
