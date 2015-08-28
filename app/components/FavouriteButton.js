'use strict';

var React = require('react-native');

var {
  Image,
  TouchableHighlight,
  StyleSheet
} = React;

var FavouriteButton = React.createClass({

  handleClick: function(event) {
    this.props.itemStore.nextItem();
  },

  render: function() {
    return (
      <TouchableHighlight onPress={this.handleClick} underlayColor="#fff" style={styles.button}>
          <Image source={require('image!favourite-button')} />
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  button: {
    flex: 1,
    marginHorizontal: 10
  }
});

module.exports = FavouriteButton;
