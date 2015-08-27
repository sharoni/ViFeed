'use strict';

var React = require('react-native');

var {
  Text,
  TouchableHighlight
} = React;

var SkipButton = React.createClass({
  handleClick: function(event) {
    console.log('skip clicked');
  },

  render: function() {
    var text = 'skip button';

    return (
       <TouchableHighlight onPress={this.handleClick}>
          <Text>{text}</Text>
      </TouchableHighlight>
    );
  }
});

module.exports = SkipButton;
