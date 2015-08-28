'use strict';

var CONFIGURATION = require('../common/Configuration')
var globalState = require('../common/globalState')
var React = require('react-native');

class VintedAPI
{
	static vintedLogin(accessToken, appId, callback: (success: ?Object) => void) {
		if (this.accessToken == null) {
			this.fetchApiToken((error, apiToken) => {
				if (!error) {
					this.handleLogin(accessToken, appId, callback);
				}
			});
		} else {
			this.handleLogin(accessToken, appId, callback);
		}
	}

	static handleLogin(accessToken, appId, callback: (success: ?Object) => void) {
		var request = new XMLHttpRequest();
		request.onreadystatechange = (e) => {
		  if (request.readyState !== 4) {
		    return;
		  }
		  if (request.status === 200) {
		    console.log('success', request.responseText);
				globalState.loggedIn = true;
				callback(true);
		  } else {
				callback(false);
		    console.warn(request);
		  }
		};
		var params = `fb_access_token=${accessToken}&fb_app_id=${appId}&token=${globalState.accessToken}`;
		var url = `${CONFIGURATION.vintedRootUrl}/api/1.2/facebook_login?${params}`;
		console.log(url);
		request.open('GET', url, true);
		request.send();
	}

	static fetchApiToken(callback: (error: ?Object, apiToken: ?Object) => void) {
		var request = new XMLHttpRequest();
		request.onreadystatechange = (e) => {
		  if (request.readyState !== 4) {
		    return;
		  }
		  if (request.status === 200) {
				var accessToken = JSON.parse(request.responseText).token;
				console.log(request.responseText);
				globalState.accessToken = accessToken;
				callback(null, accessToken);
		  } else {
		    callback(request, null);
		  }
		};
		var params = `api_key=${CONFIGURATION.vintedApiKey}`;
		var url = `${CONFIGURATION.vintedRootUrl}/api/1.2/get_token?${params}`;
		request.open('GET', url, true);
		request.send();
	}
}

module.exports = VintedAPI;
