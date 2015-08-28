const CONFIGURATION = require('../common/Configuration');
const globalState = require('../common/globalState');

class ItemStore {
  constructor(view) {
    this.state = {
      records: [],
      maxScore: null,
    };
    this.view = view;
    this.nextItem();
  }

  nextItem() {
    let {records} = this.state;
    item = records.pop();
    if (records.length < 5) {
      this._fetchNextPage();
    }

    this.state.records = records;

    this.view.setState({ item: item });
    return item;
  }

  _fetchNextPage() {
    const {records, maxScore} = this.state;

    this.view.setState({isLoading: true });

console.log(this._requestUrl())
    fetch(this._requestUrl(), {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': globalState.accessToken || '',
      }
    })
      .then((response) => response.json())
      .then((responseData) => {
        item_dtos = responseData.feed_events.filter((item_dto) => item_dto.entity_type == 'item');
				last_item = item_dtos[item_dtos.length-1];

        this.state = {
          records: records.concat(item_dtos.map((item_dto) => item_dto.entity)),
          maxScore: last_item ? last_item.score : null,
        };

        if (this.view.state.isLoading) {
          this.view.setState({
            isLoading: false,
            item: this.nextItem()
          });
        }
      })
      .done();

    return this.state;
  }

  _requestUrl() {
		const path = `${CONFIGURATION.vintedRootUrl}/api/v2/feed_events`; 
    const {maxScore} = this.state;

    if (maxScore) {
      return `${path}?max_score=${maxScore}`;
    } else {
      return path;
    }
  }
};

module.exports = ItemStore;
