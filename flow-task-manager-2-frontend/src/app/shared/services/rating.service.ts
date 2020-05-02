import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Rating } from '~/app/models/rating-models/rating-model';
import { ApiCommunicationService } from './api-communication.service';

@Injectable()
export class RatingService {

  constructor(private apiCommunicationService: ApiCommunicationService){}

  public addRating(rating: Rating): Observable<Rating> {
    return this.apiCommunicationService.rating()
    .addRating(rating);
  }

  public deleteRating(ratingId: number) {
    return this.apiCommunicationService.rating()
    .deleteRating(ratingId);
  }
}