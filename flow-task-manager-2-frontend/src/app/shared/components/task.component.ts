import { Component, Input, OnInit } from "@angular/core";
import { TaskRating } from "~/app/models/rating-models/task-rating.model";
import { Task } from "~/app/models/task-model";
import { Rating } from "~/app/models/rating-models/rating-model";
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

  @Input()
  public task: Task;

  constructor(
    private ratingService: RatingService,
    private taskService: TaskService
  ) {}

  public ngOnInit() {
    for (const rating of this.task.ratings) {
      if (rating.rating === "LIKE") {
        this.likers.push(rating);
      } else {
        this.dislikers.push(rating);
      }
    }
  }

  public rate(rate: string) {
    const rating: TaskRating = {
      rating: rate,
      username: this.username,
      taskId: this.task.id,
    };
    this.ratingService.addRating(rating).subscribe((rating) => {
      this.taskService.getTasks();
    });
  }
}
