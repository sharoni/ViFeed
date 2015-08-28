'use strict';

var React = require('react-native');

var {
  Text,
  StyleSheet,
  View
} = React;

var ItemTitle = React.createClass({
  render: function() {
    var title = this.props.title ? this.props.title : '';

    return (
      <View style={styles.wrapper}>
        <Text style={styles.title} numberOfLines={3}>{title}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  wrapper: {
    height: 110,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
    padding: 20,
  }
});

module.exports = ItemTitle;
