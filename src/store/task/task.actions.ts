import { TaskTypes as tt } from './task.types';

export const taskInfo = (task: any) => ({
  type: tt.TASK,
  task,
});