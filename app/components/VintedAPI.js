'use strict';

var CONFIGURATION = require('../common/Configuration')
var React = require('react-native');

class VintedAPI
{
	constructor() {
		this.accessToken = null
		this.loggedIn = false
	}

	vintedLogin(accessToken, appId) {
		if (this.accessToken == null) {
			this.fetchApiToken((error, apiToken) => {
				this.handleLogin(accessToken, appId)
			});
		} else {
			this.handleLogin(accessToken, appId)
		}
	}

	handleLogin(accessToken, appId) {
		var request = new XMLHttpRequest();
		request.onreadystatechange = (e) => {
		  if (request.readyState !== 4) {
		    return;
		  }
		  if (request.status === 200) {
		    console.log('success', request.responseText);
				this.loggedIn = true
		  } else {
		    console.warn(request);
		  }
		};
		var params = `fb_access_token=${accessToken}&fb_app_id=${appId}&token=${this.accessToken}`;
		var url = `${CONFIGURATION.vintedRootUrl}/api/1.2/facebook_login?${params}`;
		console.log(url);
		request.open('GET', url, true);
		request.send();
	}

	fetchApiToken(callback: (error: ?Object, apiToken: ?Object) => void) {
		var request = new XMLHttpRequest();
		request.onreadystatechange = (e) => {
		  if (request.readyState !== 4) {
		    return;
		  }
		  if (request.status === 200) {
				var accessToken = JSON.parse(request.responseText).token
				console.log(request.responseText)
				this.accessToken = accessToken
				callback(null, accessToken)
		  } else {
		    callback(request, null)
		  }
		};
		var params = `api_key=${CONFIGURATION.vintedApiKey}`;
		var url = `${CONFIGURATION.vintedRootUrl}/api/1.2/get_token?${params}`;
		request.open('GET', url, true);
		request.send();
	}
}

module.exports = VintedAPI;
