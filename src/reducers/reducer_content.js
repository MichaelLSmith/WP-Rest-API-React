import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case 'FETCH_PAGES':
      state = Object.assign({}, state, action.payload);

      return state;
    default:
      return state;

  }
}
