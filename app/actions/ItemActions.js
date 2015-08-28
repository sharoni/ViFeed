var { NEXT_ITEM, FETCH_ITEMS } = require('../constants/ActionTypes');

var nextItem = () => {
  return {
    type: NEXT_ITEM
  };
}

var fetchItems = () => {
  return {
    type: FETCH_ITEMS
  };
}

module.exports = {
  nextItem,
  fetchItems,
};
