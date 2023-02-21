import { combineReducers } from 'redux';
import curQuestReducer from './currentQuestReducer';
import curAnsReducer from './curAnsReducer';

const rootReducer = combineReducers({
  curQuestReducer,
  curAnsReducer,
});

export default rootReducer;
