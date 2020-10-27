import { TaskTypes as tt } from './task.types';

const INITIAL_STATE = { task: null };

export const taskReducer = (state = {...INITIAL_STATE }, action: any) => {
  switch(action.type) {
    case tt.TASK:
      return {
        ...state,
        task: action.task,
      }
    default:
      return state;
  }
};
