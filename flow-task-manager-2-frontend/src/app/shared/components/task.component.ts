import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Rating } from "~/app/models/rating-models/rating-model";
import { TaskRating } from "~/app/models/rating-models/task-rating.model";
import { Task } from "~/app/models/task-model";
import { RatingService } from "../services/rating.service";
import { TaskService } from "../services/task.service";

@Component({
  selector: "app-task",
  styleUrls: ["./task.component.css"],
  templateUrl: "./task.component.html",
})
export class TaskComponent implements OnInit {
  public username: string = "Misi";
  public likers: Rating[] = [];
  public dislikers: Rating[] = [];
  public rated: boolean = false;
  public rating: Rating | undefined;

  @Input()
  public task: Task;

  @Output()
  public rateEvent: EventEmitter<number> = new EventEmitter();

  constructor(
    private ratingService: RatingService,
    private taskService: TaskService
  ) {}

  public ngOnInit() {
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.task?.currentValue) {
      this.getRatings();
    }
  }

  public rate(rate: string) {
    const rating: TaskRating = {
      rating: rate,
      username: this.username,
      taskId: this.task.id,
    };
    this.ratingService.addRating(rating).subscribe(() => {
      this.taskService.getTasks();
      this.rateEvent.emit();
    });
  }

  public getRatings() {
    this.likers = [];
    this.dislikers = [];
    for (const rating of this.task.ratings) {
      if (rating.rating === "LIKE") {
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
      this.deleteRating(this.rating?.id);
    } else {
      this.deleteRating(this.rating?.id);
      this.rate(rate);
    }
  }

  public deleteRating(ratingId: number) {
    this.ratingService.deleteRating(ratingId).subscribe(() => {
      this.rating = undefined;
      this.taskService.getTasks();
      this.rateEvent.emit();
    });
  }
}
