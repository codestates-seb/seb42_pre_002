import {
  ADD_CURRENT_QUESTION,
  DELETE_CURRENT_QUESTION,
} from '../action/contentAction';

const curQuestReducer = (state = { id: 1 }, action) => {
  switch (action.type) {
    case ADD_CURRENT_QUESTION:
      return { ...action.payload };
    case DELETE_CURRENT_QUESTION:
      return {};
    default:
      return state;
  }
};

export default curQuestReducer;
