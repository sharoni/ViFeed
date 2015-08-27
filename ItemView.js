'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} = React;

var ItemStore = require('./ItemStore');
var ItemView = React.createClass({
  itemId: '100',

  getInitialState: function() {
    return {
      isLoading: true,
      item: null,
    };
  },

  componentDidMount: function() {
    this.store = new ItemStore(this);
    this.store.nextItem();
  },

  render: function() {
    console.log(this.state);
    var imageUrl = this.state.item ? this.state.item.photos[0].url : false

    return(
      <View style={styles.box}>
        <ItemImage source={imageUrl}/>
        <ItemTitle/>
        <ItemActions itemId={this.itemId}/>
      </View>
    );
  }
});

var ItemImage = React.createClass({
  render: function() {
    var image;

    if(this.props.source) {
      image = <Image
        source={{uri: this.props.source}}
        style={styles.image} />
    } else {
      image = <Text>No image</Text>
    }

    return image;
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
