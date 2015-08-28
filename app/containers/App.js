'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var FacebookLogin = require('./components/FacebookLogin');
var ItemContainer = require('./containers/ItemContainer');
var { Provider } = require('react-redux/native');

var App = React.createClass({
  render() {
    return (
      <Provider store={store}>
        {
          function() {
            <View>
              <ItemContainer/>
              <FacebookLogin />
            </View>
          }
        }
      </Provider>
    );
  }
});

AppRegistry.registerComponent('ViFeed', () => App);

module.exports = App;

import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createStore, renderDevTools } from '../utils/devTools';

import FriendListApp from './FriendListApp';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);
