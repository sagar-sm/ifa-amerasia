import {DialogContentText, withStyles} from '@material-ui/core';
import React, {Component} from 'react';
import Wrapper from './Wrapper';

const styles = theme => ({
  root: {}
});

class AboutPage extends Component {
  render() {
    return (
      <Wrapper>
        <img src={'amerasia-logo-black.png'} width={200} alt={''} />
        <p>
          <b>Liz Horodowich</b> and <b>Alexander Nagel</b>
        </p>
        <p>
          Studies devoted to the New World discoveries routinely acknowledge that Europeans confused the Americas with
          Asia well into the sixteenth century, but no study has ever focused specifically on this confusion and its
          broader implications. Early modern European cartographers, writers, editors, and artists systematically
          blurred Asia and the Americas, placing Asian ports in Latin America, Marco Polo`s lions and tigers in Canada,
          and identifying Aztec temples as mosques. We propose that the confusion evident in the cartographic record
          needs to be understood in relation to a wide array of texts and images, all of which we will consider as maps
          of different sorts. These confusions pose a fundamental methodological challenge, making it necessary to
          suspend the definition of the words “America,” “Asia,” and even mutual redefinition. To take the confusion
          seriously is to resist imposing later cartographic and cultural definitions on the earlier period, and to
          re-imagine a proximity of thinking and discovery connecting one to the other. It is tempting to say that in
          the early modern global movement of people, commodities, ideas, and images, ideas about Asia influenced
          representations of the Americas, and (a less familiar hypothesis) ideas about the New World also influenced
          representations of Asia. But the challenge is precisely not to frame the problem in such a way that America on
          one side and Asia on the other. When a Tupinamba king appears in a scene of the Adoration of the Magi, the
          challenge is to see it not as a strange intrusion of “New World” information into traditional iconography, but
          rather as an instance of expanding eastern imaginary incorporating evidence from the most recent discoveries—a
          malleable situation also evident in contemporary cartographic representations.
        </p>
        <h3>The Website</h3>
        <p>
          The website is composed primarily of an interactive high definition map. Two different types of removable pins
          appear on the map: blue pins indicate translated cartouches and yellow pins indicate longer essays. Pins are
          removable using the controls in the upper left hand corner. <a href={'#index'}>Explore the map</a>
        </p>
      </Wrapper>
    );
  }
}

export default withStyles(styles)(AboutPage);
