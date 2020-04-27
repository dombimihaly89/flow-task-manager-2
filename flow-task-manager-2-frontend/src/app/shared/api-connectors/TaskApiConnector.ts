import { Observable } from 'rxjs';
import { Task } from '~/app/models/task-model';
import { AbstractApiConnector } from './AbstractApiConnector';

export class TaskApiConnector extends AbstractApiConnector {
  protected readonly apiRoute: string = `${this.apiBaseUrl}`;

  public getTask(taskId: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiRoute}/tasks/${taskId}`);
  }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiRoute}/tasks`);
  }

  public createTask(newTask: Task) {
    console.log(newTask);
    return this.http.post<Task>(`${this.apiRoute}/tasks`, newTask);
  }
}