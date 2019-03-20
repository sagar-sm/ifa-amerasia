import {withStyles} from '@material-ui/core';
import React, {Component} from 'react';
import Wrapper from './Wrapper';

const styles = theme => ({
  credit: {
    marginBottom: 50
  }
});

class CreditsPage extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Wrapper>
        <h2>Credits</h2>
        <div className={classes.credit}>
          <em>Project Management:</em>
          <h4>Jason Varone</h4>
        </div>

        <div className={classes.credit}>
          <em>Data Visualization and Development:</em>
          <a href={'https://ssm.wiki'} target={'_blank'} style={{textDecoration: 'none', color: 'black'}}>
            <h4>Sagar Mohite</h4>
          </a>
        </div>
      </Wrapper>
    );
  }
}

export default withStyles(styles)(CreditsPage);
