'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


var {
  StyleSheet,
  Text,
  Image,
  View
} = React;

var ItemImage = React.createClass({
  render: function() {
    var output;

    if(this.props.source) {
      output = <Image
        source={{uri: this.props.source}}
        style={styles.image} />
    } else {
      output =
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    }

    return (
      <View style={styles.wrapper}>
        {output}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    marginTop: 20,
    width: width,
    height: 420
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#ccc'
  }
});

module.exports = ItemImage;
