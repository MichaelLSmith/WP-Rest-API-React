import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case 'FETCH_MENUS':
      state = Object.assign({}, state, {headerMenu: action.payload.data});
      return state;
    case 'FETCH_HEADER_OPTIONS':
      state = Object.assign({}, state, {headerOptions: action.payload.data});
      return state;
    default:
      return state;
  }
}
