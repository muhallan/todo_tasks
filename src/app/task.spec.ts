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
      date_created: new Date('July 21, 2017 01:15:00'),
      date_updated: new Date('November, 29, 2017 04:15:00'),
      done_status: false
    });
    expect(task.id).toEqual(1);
    expect(task.title).toEqual('my task');
    expect(task.description).toEqual('my description');
    expect(task.date_created).toEqual(new Date('July 21, 2017 01:15:00'));
    expect(task.date_updated).toEqual(new Date('November, 29, 2017 04:15:00'));
    expect(task.done_status).toEqual(false);
  });
});
