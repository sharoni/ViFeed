var React = require('react-native');
var { Connector } = require('react-redux/native');
var { nextItem } = require('../actionsCreators');
var Item = require('../components/Item');
var ItemActions = require('../actions/ItemActions');

var { connect } = require('react-redux');
var { View } = React;

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return state.items;
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {
    onNextItem: () => dispatch(nextItem())
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
