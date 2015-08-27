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
        <FavouriteButton itemStore={this.props.itemStore}/>
        <SkipButton itemStore={this.props.itemStore}/>
      </View>
    );
  }
});

module.exports = ItemActions;
