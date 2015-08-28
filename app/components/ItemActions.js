'use strict';

var React = require('react-native');
var FavouriteButton = require('./FavouriteButton');
var SkipButton = require('./SkipButton');

var {
  View,
  StyleSheet
} = React;

var ItemActions = React.createClass({
  render: function() {
    return (
      <View style={styles.actions}>
        <FavouriteButton itemStore={this.props.itemStore}/>
        <SkipButton itemStore={this.props.itemStore}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  actions: {
    flex: 1,
    flexDirection: 'row'
  }
});

module.exports = ItemActions;
