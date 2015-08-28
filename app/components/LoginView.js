'use strict';

var React = require('react-native');
var globalState = require('../common/globalState')

var {
  Text,
  StyleSheet,
  View
} = React;

var FacebookLogin = require('./FacebookLogin');

var LoginView = React.createClass({
  render: function() {
    return (
			<View style={styles.container}>
				<FacebookLogin onLoggedIn={this.onLoggedIn} />
			</View>
    );
  },
	
	onLoggedIn: function() {
		this.props.onLoggedIn();
	}
});

var styles = StyleSheet.create({
  container: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: '#44bcd2',
		justifyContent: 'center',
    alignItems: 'center',
  }
});

module.exports = LoginView;
