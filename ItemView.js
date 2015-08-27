'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image
} = React;


var ItemView = React.createClass({
  itemId: '100',

  getInitialState: function() {
    return {
      isLoading: false
    };
  },

  componentDidMount: function() {
    this.initialize('');
  },

  initialize: function() {
  },

  render: function() {
    return(
      <View style={styles.box}>
        <Image
          source={{uri: 'https://s11-lt.vinted.net/images/item_photos/048/072/381/183270840.jpeg?1440648362'}}
          style={styles.image}
        />
        <ItemTitle/>
        <ItemActions/>
      </View>
    );
  }
});

var ItemTitle = React.createClass({
  render: function() {
    var text = 'get item title hereeee';

    return (
      <Text>{text}</Text>
    );
  }
});

var ItemActions = React.createClass({
  render: function() {
    return (
      <View>
        <FavouriteButton/>
        <SkipButton/>
      </View>
    );
  }
});


var FavouriteButton = React.createClass({
  render: function() {
    var text = 'favourite button';

    return (
      <Text>{text}</Text>
    );
  }
});

var SkipButton = React.createClass({
  skipItem: function() {
    console.log('aa');
  },

  render: function() {
    var text = 'skip button';

    return (
      <Text onClick={this.skipItem}>{text}</Text>
    );
  }
});

var styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 400,
    backgroundColor: '#ccc'
  }
});

module.exports = ItemView;
