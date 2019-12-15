import {withStyles} from '@material-ui/core';
import React, {Component} from 'react';
import Wrapper from './Wrapper';

const styles = theme => ({
  root: {}
});

class AccessibilityPage extends Component {
  render() {
    return (
      <Wrapper>
        <h2>Accessibility</h2>
        <p>
          We strive to provide excellent digital access to all.
          <a
            href={'https://www.nyu.edu/footer/accessibility.html'}
            target={'_blank'}
            rel='noopener noreferrer'
            style={{textDecoration: 'underline', color: 'black'}}
          >
            Read the University&#8217;s statement on accessibility
          </a>
        </p>
        <p>
          This website, and the Vopel map, can be navigated entirely with keyboard controls. Additionally, all of the
          essays can be accessed via the search bar at the top of the screen, or by the links below.
        </p>
      </Wrapper>
    );
  }
}

export default withStyles(styles)(AccessibilityPage);
