import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'
import {Map} from './Map'

class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <CssBaseline />
          <Typography variant={'h2'}>Amerasia Map</Typography>
          <Map/>
        </React.Fragment>
      </div>
    )
  }
}

export default App
