'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
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
    console.log('ItemView initialized');
  },

  render: function() {
    return(
      <View style={styles.box}>
        <Image
          source={{uri: 'https://s11-lt.vinted.net/images/item_photos/048/072/381/183270840.jpeg?1440648362'}}
          style={styles.image}
        />
        <ItemTitle/>
        <ItemActions itemId={this.itemId}/>
      </View>
    );
  }
});

var ItemTitle = React.createClass({
  render: function() {
    var text = 'get item title here';

    return (
      <Text>{text}</Text>
    );
  }
});

var ItemActions = React.createClass({
  render: function() {
    return (
      <View>
        <FavouriteButton itemId={this.props.itemId} />
        <SkipButton itemId={this.props.itemId} />
      </View>
    );
  }
});


var FavouriteButton = React.createClass({
  handleClick: function() {
    console.log('favourite clicked');
  },

  render: function() {
    var text = 'favourite button';

    return (
      <TouchableHighlight onPress={this.handleClick}>
          <Text>{text}</Text>
      </TouchableHighlight>
    );
  }
});

var SkipButton = React.createClass({
  handleClick: function(event) {
    console.log('skip clicked');
  },

  render: function() {
    var text = 'skip button';

    return (
       <TouchableHighlight onPress={this.handleClick}>
          <Text>{text}</Text>
      </TouchableHighlight>
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
