import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case 'FETCH_MENUS':
      state = Object.assign({}, state, action.payload.data);
    case 'FETCH_HEADER_OPTIONS':
      state = Object.assign({}, state, action.payload.data);

    default:
      return state;
  }
}
