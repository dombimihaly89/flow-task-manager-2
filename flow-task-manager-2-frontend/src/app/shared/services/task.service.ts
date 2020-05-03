import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '~/app/models/task-model';
import { ApiCommunicationService } from './api-communication.service';

@Injectable()
export class TaskService {

  private _tasksBehaviourSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

  constructor(private apiCommunicationService: ApiCommunicationService) {}

  public get tasksBehaviourSubject() {
    return this._tasksBehaviourSubject;
  }

  public getTask(taskId: number): Observable<Task> {
    return this.apiCommunicationService.task()
    .getTask(taskId);
  }

  public getTasks() {
    this.apiCommunicationService.task()
    .getTasks()
    .subscribe((tasks: Task[]) => {
      this._tasksBehaviourSubject.next(tasks);
    });
  }

  public createTask(newTask: Task) {
    return this.apiCommunicationService.task()
    .createTask(newTask);
  }

  public deleteTask(taskId: number) {
    return this.apiCommunicationService.task()
    .deleteTask(taskId);
  }

}