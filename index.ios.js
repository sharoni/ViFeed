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

var ItemView = require('./ItemView');
var styles = StyleSheet.create(require('./styles.js'));
var FacebookLogin = require('./FacebookLogin');

var ViFeed = React.createClass({
  render: function() {
    return (
			<View style={styles.loginContainer}>
        <ItemView/>
				<FacebookLogin />
			</View>
    );
  },
});

AppRegistry.registerComponent('ViFeed', () => ViFeed);
