'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var FacebookLogin = require('./components/FacebookLogin');
var ItemView = require('./components/ItemView');

var App = React.createClass({
  render: function() {
    return (
      <View>
        <ItemView/>
        <FacebookLogin />
      </View>
    );
  },
});

AppRegistry.registerComponent('ViFeed', () => App);

module.exports = App;
