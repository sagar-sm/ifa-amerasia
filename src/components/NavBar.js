import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid/Grid'
import InputBase from '@material-ui/core/InputBase'
import {withStyles} from '@material-ui/core/styles'
import {fade} from '@material-ui/core/styles/colorManipulator'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import {Link} from 'react-router-dom'

export const headerHeight = 64

const styles = theme => ({
  root: {
    width: '100%',
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.09),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.05),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 300,
    },
    [theme.breakpoints.up('md')]: {
      width: 500,
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class NavBar extends React.Component {
  render() {
    const {classes} = this.props
    return (
      <div className={classes.root}>
        <AppBar position={'absolute'} color={'default'}>
          <Toolbar>
            <Grid container justify={'space-between'} alignItems={'center'}>
              <Grid item>
                <Link to={'/'}>
                  <Typography className={classes.title} variant='h4' noWrap>
                    Amerasia
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon/>
                  </div>
                  <InputBase
                    placeholder='Search'
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
              </Grid>
              <Grid item>
                <Grid container spacing={16}>
                  <Grid item>
                    <Link to={'/about'}>
                      <Typography variant={'button'}>ABOUT</Typography>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to={'/credits'}>
                      <Typography variant={'button'}>CREDITS</Typography>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to={'/accessibility'}>
                      <Typography variant={'button'}>ACCESSIBILITY</Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(NavBar)
