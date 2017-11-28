import { TestBed, inject } from '@angular/core/testing';

import { TaskDataService } from './task-data.service';
import { Task } from './task';

describe('TaskDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskDataService]
    });
  });

  it('should be created', inject([TaskDataService], (service: TaskDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('getAllTasks()', () => {
    it('should return an empty array at first', inject([TaskDataService], (service: TaskDataService) => {
      expect(service.getAllTasks()).toEqual([]);
    }));
    it('should return all tasks available', inject([TaskDataService], (service: TaskDataService) => {
      const first_task = new Task({
        title: 'first task',
        description: 'first description',
        date_created: new Date,
        date_updated: new Date,
        done_status: false
      });
      const second_task = new Task({
        title: 'second task',
        description: 'second description',
        date_created: new Date,
        date_updated: new Date,
        done_status: true
      });
      service.addNewTask(first_task);
      service.addNewTask(second_task);
      expect(service.getAllTasks()).toEqual([first_task, second_task]);
    }));
  });

  describe('addNewTask(task)', () => {
    it('should automatically assign an id to the task which is incrementing', inject([TaskDataService],
    (service: TaskDataService) => {
      const first_task = new Task({
        title: 'first task',
        description: 'first description',
        date_created: new Date,
        date_updated: new Date,
        done_status: false
      });
      const second_task = new Task({
        title: 'second task',
        description: 'second description',
        date_created: new Date,
        date_updated: new Date,
        done_status: true
      });
      service.addNewTask(first_task);
      service.addNewTask(second_task);
      expect(service.getTaskWithId(1)).toEqual(first_task);
      expect(service.getTaskWithId(2)).toEqual(second_task);
    }));
  });

  describe('deleteTaskWithId(id)', () => {
    it('should delete a task with a given an id', inject([TaskDataService], (service: TaskDataService) => {
      const first_task = new Task({
        title: 'first task',
        description: 'first description',
        date_created: new Date,
        date_updated: new Date,
        done_status: false
      });
      const second_task = new Task({
        title: 'second task',
        description: 'second description',
        date_created: new Date,
        date_updated: new Date,
        done_status: true
      });
      service.addNewTask(first_task);
      service.addNewTask(second_task);
      expect(service.getAllTasks()).toEqual([first_task, second_task]);
      service.deleteTaskWithId(1);
      expect(service.getAllTasks()).toEqual([second_task]);
      service.deleteTaskWithId(2);
      expect(service.getAllTasks()).toEqual([]);
    }));
    it('should not delete any task if an task with the given id is not available', inject([TaskDataService],
    (service: TaskDataService) => {
      const first_task = new Task({
        title: 'first task',
        description: 'first description',
        date_created: new Date,
        date_updated: new Date,
        done_status: false
      });
      const second_task = new Task({
        title: 'second task',
        description: 'second description',
        date_created: new Date,
        date_updated: new Date,
        done_status: true
      });
      service.addNewTask(first_task);
      service.addNewTask(second_task);
      expect(service.getAllTasks()).toEqual([first_task, second_task]);
      service.deleteTaskWithId(3);
      expect(service.getAllTasks()).toEqual([first_task, second_task]);
    }));
  });

  describe('editTaskWithId(id, values)', () => {
    it('should return task with the id provided with the details updated', inject([TaskDataService],
    (service: TaskDataService) => {
      const first_task = new Task({
        title: 'first task',
        description: 'first description',
        date_created: new Date,
        date_updated: new Date,
        done_status: false
      });
      service.addNewTask(first_task);
      const updated_first_task = service.editTaskWithId(1, {
        title: 'updated title'
      });
      expect(updated_first_task.title).toEqual('updated title');
    }));
    it('should return null if the id of the task is not found', inject([TaskDataService],
    (service: TaskDataService) => {
      const first_task = new Task({
        title: 'first task',
        description: 'first description',
        date_created: new Date,
        date_updated: new Date,
        done_status: false
      });
      service.addNewTask(first_task);
      const updated_first_task = service.editTaskWithId(3, {
        title: 'updated title'
      });
      expect(updated_first_task).toEqual(null);
    }));
  });

  describe('modifyTaskDoneStatus(task)', () => {
    it('should return an updated task with the done status inversed', inject([TaskDataService],
      (service: TaskDataService) => {
        const first_task = new Task({
          title: 'first task',
          description: 'first description',
          date_created: new Date,
          date_updated: new Date,
          done_status: false
        });
        service.addNewTask(first_task);
        const updated_first_task = service.modifyTaskDonetatus(first_task);
        expect(updated_first_task.done_status).toEqual(true);
        service.modifyTaskDonetatus(first_task);
        expect(updated_first_task.done_status).toEqual(false);
      }));
  });
});
