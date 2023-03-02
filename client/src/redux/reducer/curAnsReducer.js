import {
  ADD_CURRENT_ANSWER,
  DELETE_CURRENT_ANSWER,
} from '../action/contentAction';

const curAnsReducer = (state = { id: 1 }, action) => {
  switch (action.type) {
    case ADD_CURRENT_ANSWER:
      return { ...action.payload };
    case DELETE_CURRENT_ANSWER:
      return {};
    default:
      return state;
  }
};

export default curAnsReducer;
