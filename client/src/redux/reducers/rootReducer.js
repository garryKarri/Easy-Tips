import { combineReducers } from 'redux';
import chartReducer from './chartReducer';
import loaderReducer from './loaderReducer';
import reviewReducer from './reviewReducer';
import userReducer from './userReducer';
import { workerReducer } from './workerReducer';

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  worker: workerReducer,
  chart: chartReducer,
  review: reviewReducer,
});

export default rootReducer;
