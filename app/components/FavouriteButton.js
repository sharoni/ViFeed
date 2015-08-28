'use strict';

var React = require('react-native');
var VintedAPI = require('./VintedAPI')

var {
  Image,
  TouchableHighlight,
  StyleSheet
} = React;

var FavouriteButton = React.createClass({

  handleClick: function(event) {
		VintedAPI.favouriteItem(this.props.item.id, (success) => {
			console.log("Item favourited successfully");
		});
    this.props.itemStore.nextItem();
  },

  render: function() {
    return (
      <TouchableHighlight onPress={this.handleClick} underlayColor="#fff" style={styles.button}>
          <Image source={require('image!favourite-button')} />
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  button: {
    flex: 1,
    marginHorizontal: 15
  }
});

module.exports = FavouriteButton;
