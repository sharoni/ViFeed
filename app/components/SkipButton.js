'use strict';

var React = require('react-native');

var {
  Image,
  TouchableHighlight,
  StyleSheet
} = React;

var SkipButton = React.createClass({
  handleClick: function(event) {
    this.props.itemStore.nextItem();
  },

  render: function() {
    var text = 'skip button';

    return (
      <TouchableHighlight onPress={this.handleClick} underlayColor="#fff" style={styles.button}>
        <Image source={require('image!skip-button')} />
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

module.exports = SkipButton;
