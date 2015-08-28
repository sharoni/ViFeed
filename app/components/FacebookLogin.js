'use strict';

var VintedAPI = require('./VintedAPI')
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
	FBSDKAccessToken,
  FBSDKGraphRequest,
} = FBSDKCore;

var FacebookLogin = React.createClass({
  getInitialState: function() {
    return {
      loggedIn: false,
			loginText: 'login',
			accessToken: null,
			apiToken: null,
			appId: null,
			vintedAPI: new VintedAPI()
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
					this.fetchPublicInfo()
					FBSDKAccessToken.getCurrentAccessToken((token) => {
						this.setState({accessToken: token.tokenString, appId: token.appID});
						this.state.vintedAPI.vintedLogin(token.tokenString, token.appID);
					});
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

var styles = StyleSheet.create({
  facebook_login_button: {
    alignItems: 'center',
    justifyContent: 'center',
		flex: 1,
  }
});

module.exports = FacebookLogin;
