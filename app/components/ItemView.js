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
    console.log(this.state);
    var imageUrl = this.state.item ? this.state.item.photos[0].url : false

    return(
      <View style={styles.box}>
        <ItemImage source={imageUrl}/>
        <ItemTitle/>
        <ItemActions itemId={this.itemId}/>
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
