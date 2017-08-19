import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case 'FETCH_MENUS':
      console.log('action in menu reducer:',action);
      state = Object.assign({}, state, action.payload.data);

    default:
      return state;
  }
}
