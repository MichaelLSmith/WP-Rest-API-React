// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import contentReducer from './reducer_content';
 import menusReducer from './reducer_structure';
 import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  content: contentReducer,
  structure: menusReducer,
  routing: routerReducer
});

 export default rootReducer;
