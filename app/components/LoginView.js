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
  button: {
    flex: 1,
    marginHorizontal: 10
  }
});

module.exports = LoginView;
