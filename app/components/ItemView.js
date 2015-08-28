'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} = React;

var ItemStore = require('../stores/ItemStore');
var ItemTitle = require('./ItemTitle');
var ItemImage = require('./ItemImage');
var ItemActions = require('./ItemActions');

var ItemView = React.createClass({
  itemId: '100',

  getInitialState: function() {
    return {
      isLoading: true,
      item: null,
    };
  },

  componentDidMount: function() {
    this.store = new ItemStore(this);
  },

  render: function() {
    var imageUrl = false;
    var itemTitle = false;

    if (this.state.item) {
      imageUrl = this.state.item.photos[0].url
      itemTitle = this.state.item.title;
    }

    return(
      <View style={styles.box}>
        <ItemImage source={imageUrl}/>
        <ItemTitle title={itemTitle}/>
        <ItemActions itemStore={this.store} item={this.state.item}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

module.exports = ItemView;
