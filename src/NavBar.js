import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Typography from '@material-ui/core/Typography/Typography'
import React, {Component} from 'react'
import {AppBar, withStyles} from '@material-ui/core'

const styles = (theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
  },
})

export const headerHeight = 64

class NavBar extends Component {
  render() {
    const {classes} = this.props
    return (
      <AppBar className={classes.root} position={'absolute'} color={'default'}>
        <Toolbar>
          <Typography variant={'h4'}>Amerasia</Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(NavBar)
