import { ON_RERENDER } from '../action/contentAction';

const onRerenderReducer = (state = {}, action) => {
  switch (action.type) {
    case ON_RERENDER:
      return { ...action.payload };
    default:
      return state;
  }
};

export default onRerenderReducer;
