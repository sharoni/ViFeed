'use strict';

var React = require('react-native');
var FavouriteButton = require('./FavouriteButton');
var LikeButton = require('./LikeButton');
var DislikeButton = require('./DislikeButton');

var {
  View,
  StyleSheet
} = React;

var ItemActions = React.createClass({
  render: function() {
    return (
      <View style={styles.actions}>
        <DislikeButton itemStore={this.props.itemStore}/>
        <FavouriteButton itemStore={this.props.itemStore} item={this.props.item}/>
        <LikeButton itemStore={this.props.itemStore}/>
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
