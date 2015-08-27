'use strict';

var React = require('react-native');
var FavouriteButton = require('./FavouriteButton');
var SkipButton = require('./SkipButton');

var {
  View
} = React;

var ItemActions = React.createClass({
  render: function() {
    return (
      <View>
        <FavouriteButton />
        <SkipButton />
      </View>
    );
  }
});

module.exports = ItemActions;
