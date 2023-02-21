export const ADD_CURRENT_QUESTION = 'ADD_CURRENT_QUESTION';
export const DELETE_CURRENT_QUESTION = 'DELETE_CURRENT_QUESTION';
export const ADD_CURRENT_ANSWER = 'ADD_CURRENT_ANSWER';
export const DELETE_CURRENT_ANSWER = 'DELETE_CURRENT_ANSWER';

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
