'use strict';

var React = require('react-native');

var {
  Text
} = React;

var ItemTitle = React.createClass({
  render: function() {
    var title = this.props.title ? this.props.title : '';

    return (
      <Text>{title}</Text>
    );
  }
});

module.exports = ItemTitle;
