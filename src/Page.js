import {withStyles} from '@material-ui/core'
import React, {Component} from 'react'

const styles = (theme) => ({
  root: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
})

class Page extends Component {
  render() {
    const {classes, children, ...rest} = this.props
    return (
      <div className={classes.root} {...rest}>
        {children}
      </div>
    )
  }
}

export default withStyles(styles)(Page)

