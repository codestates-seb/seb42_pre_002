export const ADD_CURRENT_QUESTION = 'ADD_CURRENT_QUESTION';
export const DELETE_CURRENT_QUESTION = 'DELETE_CURRENT_QUESTION';
export const ADD_CURRENT_ANSWER = 'ADD_CURRENT_ANSWER';
export const DELETE_CURRENT_ANSWER = 'DELETE_CURRENT_ANSWER';

export const ON_RERENDER = 'ON_RERENDER';

export const ADD_USER_INFO = 'ADD_USER_INFO';
export const DELETE_USER_INFO = 'DELETE_USER_INFO';

export const addCurrentQuest = (data) => {
  return {
    type: ADD_CURRENT_QUESTION,
    payload: data,
  };
};

export const delCurrentQuest = () => {
  return {
    type: DELETE_CURRENT_QUESTION,
    payload: {},
  };
};

export const addCurrentAnswer = (data) => {
  return {
    type: ADD_CURRENT_ANSWER,
    payload: data,
  };
};

export const delCurrentAnswer = () => {
  return {
    type: DELETE_CURRENT_ANSWER,
    payload: {},
  };
};

export const onRerender = (data) => {
  return {
    type: ON_RERENDER,
    payload: data,
  };
};

export const addUserInfo = (data) => {
  return {
    type: ADD_USER_INFO,
    payload: data,
  };
};

export const delUserInfo = () => {
  return {
    type: DELETE_USER_INFO,
    payload: {},
  };
};
