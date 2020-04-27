import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Rating } from '~/app/models/rating-models/rating-model';
import { ApiCommunicationService } from './api-communication.service';
import { TaskRating } from '~/app/models/rating-models/task-rating.model';

@Injectable()
export class RatingService {

  constructor(private apiCommunicationService: ApiCommunicationService){}

  public addRating(rating: TaskRating): Observable<Rating> {
    console.log(rating);
    return this.apiCommunicationService.rating()
    .addRating(rating);
  }
}