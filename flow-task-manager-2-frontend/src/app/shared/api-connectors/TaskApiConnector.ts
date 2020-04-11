import { Observable } from 'rxjs';
import { Task } from '~/app/models/task-model';
import { AbstractApiConnector } from './AbstractApiConnector';

export class TaskApiConnector extends AbstractApiConnector {
  protected readonly apiRoute: string = `${this.apiBaseUrl}`;

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiRoute}/tasks`);
  }
}