import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <CssBaseline />
          <Typography variant={'h1'}>Hello World</Typography>
          <Typography variant={'h2'}>This is a starting point</Typography>
          <Typography variant={'body1'}>Lorem Ipsum Dolor</Typography>
        </React.Fragment>
      </div>
    )
  }
}

export default App
