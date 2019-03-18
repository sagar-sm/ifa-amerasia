import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid/Grid';
import IconButton from '@material-ui/core/IconButton/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu/Menu';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import {withStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import Autocomplete from 'react-autocomplete';
import {Link, withRouter} from 'react-router-dom';
import {DATA} from '../data';

export const headerHeight = 64;

const styles = theme => ({
  root: {
    width: '100%',
    zIndex: theme.zIndex.drawer + 1
  },
  appBar: {
    backgroundColor: '#c2ab8a'
  },
  navLink: {
    textDecoration: 'none'
  },
  headerItem: {
    width: '33.33%'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  titleContainer: {
    [theme.breakpoints.down('sm')]: {
      width: '25%'
    }
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgba(220, 220, 220, 0.6)',

    marginLeft: 0,
    width: '100%'
  },
  searchContainer: {
    [theme.breakpoints.down('sm')]: {
      width: '60%'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 5,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 6,
    width: '100%'
  },
  navLinksContainer: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      width: '20%'
    }
  },
  minifiedAppBar: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex'
    }
  },
  logo: {
    height: 22,
    [theme.breakpoints.down('sm')]: {
      height: 20
    },
    [theme.breakpoints.down('xs')]: {
      height: 13
    }
  },
  byline: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    fontSize: 13,
    paddingLeft: 2 // correct visual aberration
  }
});

class NavBar extends React.Component {
  state = {
    minifiedNavMenuOpen: false,
    searchValue: ''
  };

  anchorEl = null;

  openNavMenu = event => {
    this.anchorEl = event.target;
    this.setState({minifiedNavMenuOpen: true});
  };

  closeNavMenu = () => {
    this.anchorEl = null;
    this.setState({minifiedNavMenuOpen: false});
  };

  renderInput = ({value, ref, onChange, ...rest}) => {
    const {classes} = this.props;
    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder='Search'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          value={value}
          onChange={onChange}
          inputRef={ref}
          inputProps={{
            'aria-label': 'Search'
          }}
          {...rest}
        />
      </div>
    );
  };

  renderSearchResult = (item, isHighlighted) => {
    return (
      <MenuItem key={`search-result-${item.id}`} style={{background: isHighlighted ? 'lightgray' : 'white'}}>
        {item.title}
      </MenuItem>
    );
  };

  onSearchValueChange = e => this.setState({searchValue: e.target.value});

  onSearchValueSelect = (val, item) => {
    this.setState({searchValue: val});
    this.props.history.push(item.id);
  };

  getItemValue = item => item.title;

  shouldItemRender = (item, value) =>
    value.length > 0 && `${item.id} ${item.title} ${item.keywords}`.toLowerCase().includes(value.toLowerCase());

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <AppBar position={'relative'} color={'default'} className={classes.appBar}>
          <Toolbar>
            <Grid container justify={'space-between'} alignItems={'center'}>
              <Grid item className={`${classes.headerItem} ${classes.titleContainer}`}>
                <Link to={'/'} className={classes.navLink}>
                  <img src={'amerasia-logo-black.png'} className={classes.logo} />
                  <Typography className={classes.byline}>An inquiry into early modern imaginative geography</Typography>
                </Link>
              </Grid>
              <Grid item className={`${classes.headerItem} ${classes.searchContainer}`}>
                <Autocomplete
                  items={DATA}
                  value={this.state.searchValue}
                  onChange={this.onSearchValueChange}
                  onSelect={this.onSearchValueSelect}
                  getItemValue={this.getItemValue}
                  shouldItemRender={this.shouldItemRender}
                  renderInput={this.renderInput}
                  renderItem={this.renderSearchResult}
                  wrapperStyle={{display: 'flex'}}
                />
              </Grid>
              <Grid item className={`${classes.headerItem} ${classes.navLinksContainer}`}>
                <Grid container spacing={16} justify={'flex-end'}>
                  <Grid item>
                    <Link to={'/about'} className={classes.navLink}>
                      <Typography variant={'button'}>ABOUT</Typography>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to={'/credits'} className={classes.navLink}>
                      <Typography variant={'button'}>CREDITS</Typography>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to={'/accessibility'} className={classes.navLink}>
                      <Typography variant={'button'}>ACCESSIBILITY</Typography>
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.minifiedAppBar}>
                <Grid container justify={'flex-end'}>
                  <Tooltip title={'More'}>
                    <IconButton onClick={this.openNavMenu}>
                      <MoreVertIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
            <Menu anchorEl={this.anchorEl} open={this.state.minifiedNavMenuOpen} onClose={this.closeNavMenu}>
              <Link to={'/'} className={classes.navLink}>
                <MenuItem onClick={this.closeNavMenu}>
                  <Typography variant={'button'}>HOME</Typography>
                </MenuItem>
              </Link>
              <Link to={'/about'} className={classes.navLink}>
                <MenuItem onClick={this.closeNavMenu}>
                  <Typography variant={'button'}>ABOUT</Typography>
                </MenuItem>
              </Link>
              <Link to={'/credits'} className={classes.navLink}>
                <MenuItem onClick={this.closeNavMenu}>
                  <Typography variant={'button'}>CREDITS</Typography>
                </MenuItem>
              </Link>
              <Link to={'/accessibility'} className={classes.navLink}>
                <MenuItem onClick={this.closeNavMenu}>
                  <Typography variant={'button'}>ACCESSIBILITY</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(NavBar));
