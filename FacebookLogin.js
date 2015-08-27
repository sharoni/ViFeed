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
						this.fetchApiToken()
					});
		    }
		  }
		});	
	},
	
	logout: function() {
		FBSDKLoginManager.logOut();
		this.setState({loginText: 'login', loggedIn: false});
	},
	
	vintedLogin: function(accessToken, appId, apiToken) {
		var request = new XMLHttpRequest();
		request.onreadystatechange = (e) => {
		  if (request.readyState !== 4) {
		    return;
		  }
		  if (request.status === 200) {
		    console.log('success', request.responseText);
		  } else {
		    console.warn(request);
		  }
		};
		var params = '?fb_access_token=' + accessToken +'&fb_app_id=' + appId + '&token=' + apiToken
		var url = 'https://sandbox-us.vinted.net/api/1.2/facebook_login' + params
		console.log(url)
		request.open('GET', url, true);
		request.send();
	},
	
	fetchApiToken: function() {
		var request = new XMLHttpRequest();
		request.onreadystatechange = (e) => {
		  if (request.readyState !== 4) {
		    return;
		  }
		  if (request.status === 200) {
				var apiToken = JSON.parse(request.responseText).token
				this.vintedLogin(this.state.accessToken, this.state.appId, apiToken)
		  } else {
		    console.warn(request);
		  }
		};
		var params = '?api_key=<API_KEY>'
		var url = 'https://sandbox-us.vinted.net/api/1.2/get_token' + params
		request.open('GET', url, true);
		request.send();
		
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