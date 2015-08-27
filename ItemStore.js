const URL = 'https://vinted.com/';

class ItemStore {
  constructor(view) {
    this.state = {
      records: [],
      maxScore: null,
    };
    this.view = view;
  }

  nextItem() {
    let {records} = this.state;
    item = records.pop();
    if (records.length < 5) {
      this._fetchNextPage();
    }

    this.state.records = records;
    return item;
  }

  _fetchNextPage() {
    const {records, maxScore} = this.state;

    fetch(this._requestUrl(), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((responseData) => {
        item_dtos = responseData.filter((item_dto) => item_dto.entity_type == 'item');
        last_item = item_dtos[item_dtos.length-1];

        this.state = {
          records: records.concat(item_dtos.map((item_dto) => item_dto.entity)),
          maxScore: last_item ? last_item.score : null,
        };

        console.log(this.state);
        this.view.changedState();
      })
      .done();

    return this.state;
  }

  _requestUrl() {
    const {maxScore} = this.state;

    if (maxScore) {
      return `${URL}?max_score=${maxScore}`;
    } else {
      return `${URL}`;
    }
  }
};

module.exports = ItemStore;
