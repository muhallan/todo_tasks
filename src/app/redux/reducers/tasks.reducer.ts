import * as all_tasks from './../actions/get_tasks.action';

// The "tasks" reducer performs actions on our list of tasks
export const tasks = (state: any = [], action: all_tasks.GetTasksAction) => {
    switch (action.type) {
        case 'GET_TASKS':
          return action.payload;
        default:
          return state;
      }
};
