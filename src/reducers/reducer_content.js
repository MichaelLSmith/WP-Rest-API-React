import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case 'FETCH_PAGES':
      console.log(`action: `, action);
      return state;
    default:
    return state;

  }
}
