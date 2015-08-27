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
			<View style={styles.loginContainer}>
				<FacebookLogin/>
			</View>
    );
  },
});

var styles = StyleSheet.create(require('./styles.js'));


AppRegistry.registerComponent('ViFeed', () => ViFeed);