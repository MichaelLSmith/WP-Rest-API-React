// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import ContentReducer from './reducer_content';
 import menusReducer from './reducer_menus';
 import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  content: ContentReducer,
  menus: menusReducer,
  routing: routerReducer
});

 export default rootReducer;
