// the Task class to define how a task is created
export class Task {
    id: number;
    title: string;
    description: string;
    date_created: Date;
    date_updated: Date;
    done_status: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
