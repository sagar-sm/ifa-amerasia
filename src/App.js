import {CssBaseline, MuiThemeProvider} from '@material-ui/core'
import React, {Component} from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import AboutPage from './AboutPage'
import './base.css'
import CreditsPage from './CreditsPage'
import Map from './Map'
import MapDebug from './MapDebug'
import NavBar from './NavBar'
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
              <Route exact path={'/'} component={Map} />
              <Route exact path={'/debug'} component={MapDebug} />
              <Route exact path={'/about'} component={AboutPage} />
              <Route exact path={'/credits'} component={CreditsPage} />

              {/* IMPORTANT NOTE: This route MUST be at the end */}
              <Route exact path={'/:id'} component={Map} />
            </Switch>
          </HashRouter>
        </MuiThemeProvider>
      </>
    )
  }
}

export default App
