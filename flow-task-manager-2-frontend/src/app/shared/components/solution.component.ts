import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Rating } from '~/app/models/rating-models/rating-model';
import { Solution } from '~/app/models/solution-model';
import { RatingService } from '../services/rating.service';
import { SolutionService } from '../services/solution.service';

@Component({
  selector: 'app-solution',
  styles: [
    `
      .mat-card {
        width: 90vh;
        margin: auto;
      }

      .mat-card-title {
        font-family: "Amatic SC";
        font-size: 2em;
        font-weight: 900;
      }

      mat-card-header {
        margin-left: 0px;
        border: 3px solid;
        border-radius: 10%;
        border-color: #82b80d;
        background-color: rgb(215, 253, 133);
      }
    `,
  ],
  template: `
    <mat-card>
      <a [routerLink]="">
        <mat-card-header>
          <mat-card-title>Solution by: {{ solution.username }} </mat-card-title>
          <mat-card-subtitle>
            {{
              solution.createdAt | date: "yyyy.MM.dd. HH:mm"
            }}</mat-card-subtitle
          >
        </mat-card-header>
      </a>
      <hr />
      <mat-card-content>
        <p>
          {{ solution.content }}
        </p>
      </mat-card-content>
      <hr />
      <app-likers [likers]="likers" [dislikers]="dislikers"></app-likers>
      <mat-card-actions>
        <button
          mat-button
          class="like"
          [ngClass]="{ likepressed: rating?.rating === 'LIKE' }"
          (click)="checkRating('LIKE')"
        >
          LIKE
        </button>
        <button
          mat-button
          class="dislike"
          [ngClass]="{ dislikepressed: rating?.rating === 'DISLIKE' }"
          (click)="checkRating('DISLIKE')"
        >
          DISLIKE
        </button>
      </mat-card-actions>
      <mat-card-footer>
        <p>
          Comments: Kettő
        </p>
      </mat-card-footer>
    </mat-card>
  `,
})
export class SolutionComponent {
  public username: string = 'Misi';
  public likers: Rating[] = [];
  public dislikers: Rating[] = [];
  public rating: Rating | undefined;

  @Input()
  public solution: Solution;

  @Output()
  public rateEvent: EventEmitter<number> = new EventEmitter();

  constructor(
    private ratingService: RatingService,
    private solutionService: SolutionService
  ) {}

  public ngOnChanges() {
    if (this.solution) {
      this.getRatings();
    }
  }

  public rate(rate: string) {
    const rating: Rating = {
      rating: rate,
      username: this.username,
      solutionId: this.solution.id,
    };
    this.ratingService.addRating(rating).subscribe(() => {
      this.solutionService.getSolutionsByTaskId(this.solution.taskId);
      this.rateEvent.emit();
    });
  }

  public getRatings() {
    this.likers = [];
    this.dislikers = [];
    for (const rating of this.solution.ratings) {
      if (rating.rating === 'LIKE') {
        this.likers.push(rating);
      } else {
        this.dislikers.push(rating);
      }
      if (rating.username === this.username) {
        this.rating = rating;
      }
    }
  }

  public checkRating(rate: string) {
    if (!this.rating?.rating) {
      this.rate(rate);
    } else if (rate === this.rating?.rating) {
      this.deleteRating(this.rating?.id!);
    } else {
      this.deleteRating(this.rating?.id!);
      this.rate(rate);
    }
  }

  public deleteRating(ratingId: number) {
    this.ratingService.deleteRating(ratingId).subscribe(() => {
      this.rating = undefined;
      this.solutionService.getSolutionsByTaskId(this.solution.taskId);
      this.rateEvent.emit();
    });
  }
}
