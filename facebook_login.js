'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
	Text,
} = React;

var FBSDKLogin = require('react-native-fbsdklogin');
var {
  FBSDKLoginButton,
} = FBSDKLogin;

var FacebookLogin = React.createClass({
  render: function() {
    return (
      <View style={this.props.style}>
        <FBSDKLoginButton
          style={styles.loginButton}
          onLoginFinished={(error, result) => {
            if (error) {
              alert('Error logging in.');
            } else {
              if (result.isCanceled) {
                alert('Login cancelled.');
              } else {
                alert('Logged in.');
              }
            }
          }}
          onLogoutFinished={() => alert('Logged out.')}
          readPermissions={[]}
          publishPermissions={[]}/>
      </View>
    );
  }
});

var styles = StyleSheet.create(require('./styles.js'));

module.exports = FacebookLogin;