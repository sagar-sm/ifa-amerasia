import {withStyles} from '@material-ui/core'
import React, {Component} from 'react'
import Wrapper from './Wrapper'

const styles = (theme) => ({
  root: {}
})

class AboutPage extends Component {
  render() {
    return (
      <Wrapper>
        <h2>About IFA Amerasia</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus semper leo feugiat mollis. Nullam erat odio, pharetra ac euismod at, tristique at nulla. In commodo gravida quam eget porta. Praesent et imperdiet augue. Etiam elementum risus sit amet mauris tempor, eu iaculis tortor gravida. Proin vitae dignissim orci. Phasellus volutpat erat quis hendrerit eleifend. Nam at orci leo. Maecenas venenatis lacus ac libero egestas, vel dignissim ante sollicitudin. Nulla eget ornare velit. Fusce aliquet elementum ex, viverra viverra nunc pulvinar quis.
        </p>
        <p>
          Aenean vitae interdum metus. Etiam rutrum leo elit, eget mattis magna congue vel. Sed tincidunt, erat nec consequat rhoncus, diam dolor scelerisque nibh, vitae mollis purus nulla eget orci. Sed mollis mauris egestas, volutpat orci quis, vestibulum sem. Nunc vel ipsum vulputate felis gravida iaculis et placerat metus. Integer pulvinar varius magna, nec iaculis mauris hendrerit sit amet. Donec at ultricies mi, nec imperdiet mauris. Aliquam vel lacus dapibus arcu vehicula volutpat. Nam facilisis lorem nec erat maximus facilisis.
        </p>
        <p>
          Nullam posuere auctor est vel consequat. Aenean sapien turpis, vestibulum ut pretium quis, pellentesque eget magna. Duis mollis est nec nunc tempus, ut faucibus eros dapibus. Cras id quam at augue laoreet eleifend a ac enim. Sed vulputate auctor justo, sed volutpat nulla convallis et. Donec felis tellus, mollis eget dolor a, consequat vestibulum felis. Aenean nisl nisl, congue vel consectetur et, suscipit mattis tortor. Pellentesque auctor pretium lacus ut volutpat. Morbi pharetra id lorem pellentesque luctus. Proin vitae imperdiet ipsum, eget tristique massa. Ut in elit sed est mollis sagittis. Fusce posuere velit eget est laoreet, a convallis odio aliquet.
        </p>
      </Wrapper>
    )
  }
}

export default withStyles(styles)(AboutPage)