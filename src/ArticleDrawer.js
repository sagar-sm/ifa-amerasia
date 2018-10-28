import Drawer from '@material-ui/core/Drawer/Drawer'
import React, {Component} from 'react'
import {withStyles} from '@material-ui/core'

const styles = (theme) => ({
  drawerPaper: {
    maxWidth: 500,
  }
})

// TODO: Maybe we don't need this in a separate file

class ArticleDrawer extends Component {
  render() {
    const {classes, children} = this.props
    return (
      <Drawer
        anchor={'right'}
        variant={'persistent'}
        classes={{paper: classes.drawerPaper}}
      >
        {children}
      </Drawer>
    )
  }
}

export default withStyles(styles)(ArticleDrawer)
