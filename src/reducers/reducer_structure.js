import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case 'FETCH_MENUS':
      console.log('FETCH_MENUS action', action);
      state = Object.assign({}, state, {headerMenu: action.payload.data});
      console.log('FETCH_MENUS state:',state);
      return state;
    case 'FETCH_HEADER_OPTIONS':
      console.log('FETCH_HEADER_OPTIONS action', action)
      state = Object.assign({}, state, {headerOptions: action.payload.data});
      console.log('FETCH_HEADER_OPTIONS state:' ,state);
      return state;
    default:
      return state;
  }
}
