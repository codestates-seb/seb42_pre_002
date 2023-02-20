export const ADD_CURRENT_QUESTION = 'ADD_CURRENT_QUESTION';
export const DELETE_CURRENT_QUESTION = 'DELETE_CURRENT_QUESTION';

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
