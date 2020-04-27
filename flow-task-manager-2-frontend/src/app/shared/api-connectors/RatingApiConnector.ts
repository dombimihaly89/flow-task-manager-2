import { Observable } from 'rxjs';
import { Rating } from '~/app/models/rating-models/rating-model';
import { TaskRating } from '~/app/models/rating-models/task-rating.model';
import { AbstractApiConnector } from './AbstractApiConnector';

export class RatingApiConnector extends AbstractApiConnector {
  protected apiRoute: string = `${this.apiBaseUrl}`;

  public addRating(rating: TaskRating): Observable<Rating> {
    return this.http.post<Rating>(`${this.apiRoute}/ratings`, rating);
  }

}
