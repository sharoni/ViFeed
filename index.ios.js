'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

var FacebookLogin = require('./facebook_login');

var ViFeed = React.createClass({
   render: function() {
    return (
    	<FacebookLogin style={styles.loginContainer}/>
    );
  },
});

var styles = StyleSheet.create(require('./styles.js'));


AppRegistry.registerComponent('ViFeed', () => ViFeed);