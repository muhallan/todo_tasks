import * as create_task from './../actions/create_task.action';

// The "create" reducer creates a task and adds it to the list of tasks
export const create = (state: any = [], action: create_task.CreateTaskAction) => {
    switch (action.type) {
        case create_task.CREATE_TASK:
          return [...state, action.payload];
        default:
          return state;
      }
};
