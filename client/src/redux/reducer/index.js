import { combineReducers } from 'redux';
import curQuestReducer from './currentQuestReducer';
import curAnsReducer from './curAnsReducer';
import onRerenderReducer from './onRerenderReducer';
import userInfoReducer from './userInfoReducer';

const rootReducer = combineReducers({
  curQuestReducer,
  curAnsReducer,
  onRerenderReducer,
  userInfoReducer,
});

export default rootReducer;
