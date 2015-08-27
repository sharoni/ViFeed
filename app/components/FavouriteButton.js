'use strict';

var React = require('react-native');

var {
  Text,
  TouchableHighlight
} = React;

var FavouriteButton = React.createClass({
  handleClick: function() {
    console.log('favourite clicked');
  },

  render: function() {
    var text = 'favourite button';

    return (
      <TouchableHighlight onPress={this.handleClick}>
          <Text>{text}</Text>
      </TouchableHighlight>
    );
  }
});

module.exports = FavouriteButton;
