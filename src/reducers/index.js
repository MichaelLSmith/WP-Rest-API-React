// Set up your root reducer here...
 import { combineReducers } from 'redux';
 import ContentReducer from './reducer_content';
 import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  content: ContentReducer,
  routing: routerReducer
});

 export default rootReducer;
