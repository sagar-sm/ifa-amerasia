import {withStyles} from '@material-ui/core'
import React, {Component} from 'react'
import {headerHeight} from './NavBar'

const styles = (theme) => ({
  root: {
    width: '50vw',
    padding: 2 * theme.spacing.unit,
    margin: 'auto',
    marginTop: headerHeight,
  },
  [theme.breakpoints.down('md')]: {
    root: {
      width: '100vw',
    }
  }
})

class Wrapper extends Component {
  render() {
    const {classes, children} = this.props
    return (
      <div className={classes.root}>
        {children}
      </div>
    )
  }
}

export default withStyles(styles)(Wrapper)

