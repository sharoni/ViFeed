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
