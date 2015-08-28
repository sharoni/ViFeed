'use strict';

var VintedAPI = require('./VintedAPI')
var globalState = require('../common/globalState')
var React = require('react-native');
var {
  StyleSheet,
  View,
	Text,
	TouchableHighlight,
  Image
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
			loginText: 'LOGIN',
			apiToken: null,
			appId: null,
    };
  },

  getLoginButton: function() {
    return (
      <View style={styles.button}>
        <Image source={require('image!fingerprint')} style={styles.loginIcon}/>
        <Text style={styles.loginText}>{this.state.loginText}</Text>
      </View>
    )
  },

  render: function() {
    return (
  			<TouchableHighlight onPress={this.handleClick} underlayColor="#44bcd2">
          {this.getLoginButton()}
        </TouchableHighlight>
    );
  },

	handleClick: function() {
		if (this.state.loggedIn) {
			this.logout();
		} else {
      // this.props.onLoginStart();
			this.login();
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
					this.fetchPublicInfo();
					FBSDKAccessToken.getCurrentAccessToken((token) => {
						this.setState({accessToken: token.tokenString, appId: token.appID});
						VintedAPI.vintedLogin(token.tokenString, token.appID, (success) => {
							if (success) {
								this.props.onLoggedIn();
							}
						});
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
				var name = result.name;
				this.setState({loginText: 'Hi ' + name, loggedIn: true});
		  }
		}, '/me');

		fetchPublicInfo.start();
	}
});

var styles = StyleSheet.create({
  loginText: {
		color: '#fff',
		fontSize: 16,
    marginTop: 12
  },
  loginIcon: {
    marginTop: 280
  },
  button: {
    alignItems: 'center'
  }
});

module.exports = FacebookLogin;
