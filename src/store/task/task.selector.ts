import { createSelector } from "reselect";

const selectTaskReducer = (state: any) => state.task;

export const selectTask = createSelector(
  [selectTaskReducer],
  (_task: any) => _task.task,
);
