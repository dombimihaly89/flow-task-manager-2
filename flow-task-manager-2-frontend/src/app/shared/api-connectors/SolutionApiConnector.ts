import { Observable } from 'rxjs';
import { Solution } from '~/app/models/solution-model';
import { AbstractApiConnector } from './AbstractApiConnector';

export class SolutionApiConnector extends AbstractApiConnector {
  protected apiRoute: string = `${this.apiBaseUrl}`;

  public getSolutionsByTaskId(taskId: number): Observable<Solution[]> {
    return this.http.get<Solution[]>(`${this.apiRoute}/solutions/${taskId}/task`);
  }

}
