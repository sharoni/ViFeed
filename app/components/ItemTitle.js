'use strict';

var React = require('react-native');

var {
  Text
} = React;

var ItemTitle = React.createClass({
  render: function() {
    var text = 'get item title here';

    return (
      <Text>{text}</Text>
    );
  }
});

module.exports = ItemTitle;
