import { ADD_USER_INFO, DELETE_USER_INFO } from '../action/contentAction';

const userInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER_INFO:
      return { ...action.payload };
    case DELETE_USER_INFO:
      return {};
    default:
      return state;
  }
};

export default userInfoReducer;
