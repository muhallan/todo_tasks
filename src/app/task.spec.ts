import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    expect(new Task()).toBeTruthy();
  });
  it('should receive values passed through a constructor', () => {
    const task = new Task({
      id: 1,
      title: 'my task',
      description: 'my description',
      date_created: new Date,
      date_updated: new Date,
      done_status: false
    });
    expect(task.id).toEqual(1);
    expect(task.title).toEqual('my task');
    expect(task.description).toEqual('my description');
    expect(task.date_created).toEqual(new Date);
    expect(task.date_updated).toEqual(new Date);
    expect(task.done_status).toEqual(false);
  });
});
