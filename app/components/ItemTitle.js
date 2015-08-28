'use strict';

var React = require('react-native');

var {
  Text,
  StyleSheet
} = React;

var ItemTitle = React.createClass({
  render: function() {
    var title = this.props.title ? this.props.title : '';

    return (
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
    );
  }
});

var styles = StyleSheet.create({
  title: {
    height: 60,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
    padding: 20,
  }
});

module.exports = ItemTitle;
