'use strict';

var React = require('react-native');

var {
  Image,
  TouchableHighlight,
  StyleSheet
} = React;

var DislikeButton = React.createClass({
  handleClick: function(event) {
    this.props.itemStore.nextItem();
  },

  render: function() {
    var text = 'skip button';

    return (
      <TouchableHighlight onPress={this.handleClick} underlayColor="#fff" style={styles.button}>
        <Image source={require('image!dislike-button')} style={styles.icon} />
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  button: {
    flex: 1,
    marginHorizontal: 5
  },
  icon: {
    marginTop: 16
  }
});

module.exports = DislikeButton;
