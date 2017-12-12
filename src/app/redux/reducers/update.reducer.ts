import * as update from './../actions/update_task.action';

// The "update_task_reducer" reducer updates a task and returns the list of all tasks including the updated one
export function update_task_reducer (state: any = [], action: update.UpdateTaskAction) {
    switch (action.type) {
        case update.UPDATE_TASK:
          return state.map(task => {
            return task.id === action.payload.id ? Object.assign({}, task, action.payload) : task;
          });
        default:
          return state;
      }
}