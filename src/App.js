import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Map} from './Map'
import {MapDebug} from './MapDebug'

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'} component={Map} />
            <Route path={'/debug'} component={MapDebug} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App
