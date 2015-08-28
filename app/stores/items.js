var { NEXT_ITEM, FETCH_ITEMS } = require('../constants/ActionTypes');
var ItemActions = require('../actions/ItemActions');

var initialState = {
  collection: [],
  current: null,
  maxScore: null,
  isLoading: true,
};

module.exports = function items(state, action) {
  state = state || initialState;
  switch (action.type) {
  case NEXT_ITEM:
    return _nextItem(state);
  case FETCH_ITEMS:
    return _fetchItems(state);
  default:
    return state;
  }
}

function _nextItem(state) {
  const { collection } = this.state;
  const current = collection[0];

  new_state = {
    ...state,
    collection: collection.slice(1),
    current: current,
  }

  if (collection.length < 6) {
    this._fetchItems(new_state);
  }

  return new_state;
}

function _fetchItems(state) {
  const { collection, maxScore } = this.state;
  let new_state;

  fetch(this._requestUrl(maxScore), {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-AUTH-TOKEN': globalState.accessToken || '',
    }
  })
    .then((response) => response.json())
    .then((responseData) => {
      const item_dtos = responseData.filter((item_dto) => item_dto.entity_type == 'item');
      const last_item = item_dtos[item_dtos.length-1];

      new_state = {
        ...state,
        collection: records.concat(item_dtos.map((item_dto) => item_dto.entity)),
        maxScore: last_item ? last_item.score : null,
        isLoading: false,
      };
    })
    .done();

  return new_state;
}

function _requestUrl(maxScore) {
  if (maxScore) {
    return `${CONFIGURATION.vintedRootUrl}/?max_score=${maxScore}`;
  } else {
    return `${CONFIGURATION.vintedRootUrl}`;
  }
}
