'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
	Text,
	TouchableHighlight,
} = React;

var FBSDKLogin = require('react-native-fbsdklogin');
var {
  FBSDKLoginManager,
} = FBSDKLogin;
var FBSDKCore = require('react-native-fbsdkcore');
var {
  FBSDKGraphRequest,
} = FBSDKCore;

var FacebookLogin = React.createClass({
  getInitialState: function() {
    return {
      loggedIn: false,
			loginText: 'login',
    };
  },
	
  render: function() {
    return (
			<TouchableHighlight onPress={this.handleClick}>
        <Text>{this.state.loginText}</Text>
      </TouchableHighlight>
    );
  },
	
	handleClick: function() {
		if (this.state.loggedIn) {
			this.logout()
			console.log(this.state)
		} else {
			this.login()
		}
	},
	
	login: function() {
		FBSDKLoginManager.logInWithReadPermissions([], (error, result) => {
		  if (error) {
		    alert('Error logging in.');
		  } else {
		    if (result.isCanceled) {
		      alert('Login cancelled.'); 
		    } else {
					console.log(result)
					this.fetchPublicInfo()
					this.setState({loginText: 'logout', loggedIn: true});
		    }
		  }
		});	
	},
	
	logout: function() {
		FBSDKLoginManager.logOut();
		this.setState({loginText: 'login', loggedIn: false});
	},
	
	fetchPublicInfo: function() {
		var fetchPublicInfo = new FBSDKGraphRequest((error, result) => {
		  if (error) {
		    alert('Error making request.');
		  } else {
				var name = result.name
				this.setState({loginText: 'logout (' + name + ')', loggedIn: true});
		  }
		}, '/me');

		fetchPublicInfo.start();
	}
});

var styles = StyleSheet.create(require('./styles.js'));

module.exports = FacebookLogin;