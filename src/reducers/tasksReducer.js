import { CREATE_TASK, DELETE_TASK } from '../actions/taskActions';

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };

  switch(action.type){
    case CREATE_TASK:
      debugger;
      const newTask = {
        id: action.taskId,
        message: action.taskMessage,
      };
      nextState[action.taskId] = newTask;
      return nextState;
    case DELETE_TASK:
      delete nextState[action.taskId];
      return nextState;
    default:
      return state;
  }
};

export default tasksReducer;
