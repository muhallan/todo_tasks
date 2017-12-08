import * as delete_task from './../actions/delete_task.action';

// The "delete_task" reducer deletes a task and returns the remaining tasks
export const delete_task = (state: any = [], action: delete_task.DeleteTasksAction) => {
    switch (action.type) {
        case delete_task.DELETE_TASK:
          return state.filter(task => {
            return task.id !== action.payload;
          });
        default:
          return state;
      }
};
