import { get_tasks_reducer } from './tasks.reducer';
import { delete_task_reducer } from './delete.reducer';
import { update_task_reducer } from './update.reducer';
import { create_task_reducer } from './create.reducer';

// map of reducers to register in the application
export const reducers = {
    get_tasks_reducer,
    delete_task_reducer,
    update_task_reducer,
    create_task_reducer,
};
