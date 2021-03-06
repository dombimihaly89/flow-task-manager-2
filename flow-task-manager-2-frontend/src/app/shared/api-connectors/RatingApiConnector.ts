import { Observable } from 'rxjs';
import { Rating } from '~/app/models/rating-models/rating-model';
import { AbstractApiConnector } from './AbstractApiConnector';

export class RatingApiConnector extends AbstractApiConnector {
  protected apiRoute: string = `${this.apiBaseUrl}`;

  public addRating(rating: Rating): Observable<Rating> {
    return this.http.post<Rating>(`${this.apiRoute}/ratings`, rating);
  }

  public deleteRating(ratingId: number) {
    return this.http.delete(`${this.apiRoute}/ratings/${ratingId}`);
  }

}
