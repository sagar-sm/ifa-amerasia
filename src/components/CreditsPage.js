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
    const { classes } = this.props;
    return (
      <Wrapper>
        <h2>Credits</h2>
        <div className={classes.credit}>
          <h3>Editors</h3>
          <h4>
            <a
              href={"https://history.nmsu.edu/people/faculty/horodowich/"}
              target={"_blank"}
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", color: "black" }}
            >
              Elizabeth Horodowich
            </a>
          </h4>
          Elizabeth Horodowich has been Professor of History at New Mexico State
          University since 2002. She is the author of{" "}
          <em>
            The Venetian Discovery of America: Geographic Imagination and Print
            Culture in the Age of Encounters{" "}
          </em>
          (2018), and co-editor with Lia Markey of{" "}
          <em>The New World in Early Modern Italy, 1492-1750</em> (2017).
        </div>

        <div className={classes.credit}>
          <h4>
            {" "}
            <a
              href={
                "https://www.nyu.edu/gsas/dept/fineart/people/faculty/nagel.htm"
              }
              target={"_blank"}
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", color: "black" }}
            >
              Alexander Nagel
            </a>
          </h4>
          Alexander Nagel has been Professor at the Institute of Fine Arts, NYU
          since 2007. He is author of{" "}
          <em>The Controversy of Renaissance Art</em> (2012) and co-author with
          Christopher Wood of <em>Anachronic Renaissance</em> (2010).
        </div>
        <h2>Website</h2>
        <div className={classes.credit}>
          <h3>Lead Designer</h3>
          <h4>
            {" "}
            <a
              href={"http://varonearts.com/"}
              target={"_blank"}
              rel="noopener noreferrer"
              style={{ textDecoration: "underline", color: "black" }}
            >
              Jason Varone
            </a>
          </h4>
          Jason Varone is an artist and designer based in both the Berkshires
          and New York City. He has been the Web & Electronic Media Manager at
          the Institute of Fine Arts since 2008. Examples of his artwork can be
          found at{" "}
          <a
            href={"http://varonearts.com/"}
            target={"_blank"}
            rel="noopener noreferrer"
            style={{ textDecoration: "underline", color: "black" }}
          >
            varonearts.com
          </a>
        </div>

        <div className={classes.credit}>
          <h3>Data Visualization and Development</h3>
          <a
            href={"https://ssm.wiki"}
            target={"_blank"}
            rel="noopener noreferrer"
            style={{ textDecoration: "underline", color: "black" }}
          >
            <h4>Sagar Mohite</h4>
          </a>
          Sagar Mohite is an interdisciplinary computational artist and an
          engineer based in New York City. Sagar received his Master’s Degree
          from New York University’s Interactive Telecommunications Program
          where he focused his research on data visualization and physical
          computing.
        </div>

        <div className={classes.credit}>
          <h3>Website Content Editor</h3>
          <h4>Louisa M. Raitt, PhD Student – The Institute of Fine Arts</h4>
          Louisa M. Raitt is a doctoral student at the Institute of Fine Arts
          studying art of the Iberian World from the fifteenth to eighteenth
          centuries. Her specific interests include Spanish Golden Age painting,
          viceregal export objects, and artistic manifestations of
          religiopolitical and doctrinal controversies.
        </div>
        <h2>Contributors</h2>
        <div className={classes.credit}>
          <h4>
            Michael Agnew, MA, MS. Romance Languages Assistant, Elmer Holmes
            Bobst Library – New York University
          </h4>
          Michael Agnew is Librarian for Romance Languages at NYU’s Bobst
          Library. He holds a PhD in Romance Languages from the University of
          Pennsylvania and a joint MLIS/MA from Long Island University’s Palmer
          School and the Institute of Fine Arts. His interests include late
          medieval and early modern book history.
        </div>

        <div className={classes.credit}>
          <h4>Claire Lipsman, MA 2020 – The Institute of Fine Arts</h4>
          Claire is a Masters student at the Institute of Fine Arts studying the
          art of the Northern and Southern Renaissance. Her research interests
          include modes of self-expression such as dress, issues relating to
          gender and sexuality, and object materiality.
        </div>
        <div className={classes.credit}>
          <h4>Larimore Hampton Pivar, MA 2019 – The Institute of Fine Arts</h4>
          Larimore is a Masters student at the Institute of Fine Arts. Her areas
          of interest include Late Medieval and Early Modern sculpture and the
          history of museums and collecting.
        </div>
        <div className={classes.credit}>
          <h4>Vittoria Riccio, MA 2019 – The Institute of Fine Arts</h4>
          Vittoria is a Masters student at the Institute of Fine Arts studying
          Italian art from the fifteenth to seventeenth centuries. Her interests
          include Roman Baroque, art of the Counter-Reformation and the role and
          patronage of religious orders, such as the Society of Jesus, in the
          artistic developments of the time.
        </div>
        <div className={classes.credit}>
          <h4>Scarlett Strauss, PhD Student – The Institute of Fine Arts</h4>
          Scarlett is a doctoral student at the Institute of Fine Arts. Her
          focus is on fifteenth and sixteenth century Italian painting, though
          her interests range from antiquity to the early modern period. She is
          particularly drawn to the ways artworks visualize ideas of
          cross-cultural exchange and trans-temporal continuity.
        </div>
        <div className={classes.credit}>
          <h4>Grace Walsh, MA 2020 – The Institute of Fine Arts</h4>
          Grace is a Masters student at the Institute of Fine Arts focusing on
          medieval and early modern western European art. Her interests include
          the word-image relationship in Gothic manuscripts and early print
          media, reception theory, medieval political theology, and
          nineteenth-century historicist art movements.
        </div>
        <div className={classes.credit}>
          <h4>Margo Weitzman, PhD Student – Rutgers University </h4>
          Margo is a doctoral student at Rutgers University studying Italian art
          from the fourteenth to sixteenth centuries. Her primary academic
          interests include viewer engagement and phenomenology, urbanism, and
          identity formation in the Italian Renaissance.
        </div>
        <div className={classes.credit}>
          <h4>Peiyue Wu, MA 2020 – The Institute of Fine Arts</h4> Peiyue is a
          Masters student at the Institute of Fine Arts studying Asian art. Her
          specific interests include modernist painting made by self-displaced
          Chinese artists in Paris, Japanese decorative export art for the
          European market, and the transnational cultural identities tied to art
          objects in the age of globalization.
        </div>
        <div className={classes.credit}>
          <img src={"neh-header.svg"} />
          <br />
          <br />
          This project was generously funded by a National Endowment for the
          Humanities Collaborative Research Grant.
          <br />
          <br />
          We wish to thank Houghton Library at Harvard University and in
          particular reference librarian Susan Halpert for graciously
          facilitating our study of the Vopel/Vavassore map and its reproduction
          here.
        </div>
      </Wrapper>
    );
  }
}

export default withStyles(styles)(CreditsPage);
