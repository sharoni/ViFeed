'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  Image
} = React;

var ItemImage = React.createClass({
  render: function() {
    var image;

    if(this.props.source) {
      image = <Image
        source={{uri: this.props.source}}
        style={styles.image} />
    } else {
      image = <Text>No image</Text>
    }

    return image;
  }
});

var styles = StyleSheet.create({
  image: {
    width: 300,
    height: 400,
    backgroundColor: '#ccc'
  }
});

module.exports = ItemImage;
