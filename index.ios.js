'use strict';

var React = require('react-native');
var ItemView = require('./ItemView');
var {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

var FacebookLogin = require('./facebook_login');
var ItemView = require('./ItemView');
var styles = StyleSheet.create(require('./styles.js'));

var ViFeed = React.createClass({
  render: function() {
    return (
			<View style={styles.loginContainer}>
				<FacebookLogin />
        <ItemView/>
			</View>
      <ItemView/>
    );
  },
});

AppRegistry.registerComponent('ViFeed', () => ViFeed);
