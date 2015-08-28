'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var LoginView = require('./components/LoginView')
var ItemView = require('./components/ItemView')
var globalState = require('./common/globalState')

var App = React.createClass({
  render: function() {
    return (
			<View style={styles.container}>
				{globalState.loggedIn ? <ItemView /> : <LoginView onLoggedIn={this.onLoggedIn} /> }
			</View>
    );
  },

	onLoggedIn: function() {
		this.forceUpdate();
	}
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
  }
});

AppRegistry.registerComponent('ViFeed', () => App);

module.exports = App;
