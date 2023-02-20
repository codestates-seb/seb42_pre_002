import { combineReducers } from 'redux';
import curQuestReducer from './currentQuestReducer';

const rootReducer = combineReducers({
  curQuestReducer,
});

export default rootReducer;
