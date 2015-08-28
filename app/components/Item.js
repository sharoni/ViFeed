'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} = React;

var ItemTitle = require('./ItemTitle');
var ItemImage = require('./ItemImage');
var ItemActions = require('./ItemActions');

var Item = React.createClass({
  render: function() {
    const { item } = this.props.item;

    if (item) {
      const imageUrl = item.photos[0].url;
      const itemTitle = item.title;

      return(
        <View style={styles.box}>
          <ItemImage source={imageUrl}/>
          <ItemTitle title={itemTitle}/>
          <ItemActions itemStore={this.store}/>
        </View>
      );
    } else {
      return(
        <View style={styles.box}>
          <ItemImage source={null}/>
        </View>
      );
    }
  }
});

var styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

module.exports = Item;
