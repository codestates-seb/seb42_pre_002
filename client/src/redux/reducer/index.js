import { combineReducers } from 'redux';
import curQuestReducer from './currentQuestReducer';
import curAnsReducer from './curAnsReducer';
import onRerenderReducer from './onRerenderReducer';

const rootReducer = combineReducers({
  curQuestReducer,
  curAnsReducer,
  onRerenderReducer,
});

export default rootReducer;
