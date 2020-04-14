import { Component, OnInit } from "@angular/core";
import { Task } from "~/app/models/task-model";
import { TaskService } from "~/app/shared/services/task.service";

@Component({
  selector: "app-task",
  styles: [
    `
      h1 {
        text-align: center;
      }

      .JAVA {
        background-image: url("../../../assets/images/java.jpg");
        background-size: cover;
      }

      .SPRING {
        background-image: url("../../../assets/images/spring.png");
        background-size: cover;
      }

      .JAVASCRIPT {
        background-image: url("../../../assets/images/javascript.png");
        background-size: cover;
      }

      .mat-card-avatar {
        height: 60px;
        width: 60px;
      }

      .mat-card {
        margin-bottom: 20px;
      }

      .like {
        background-color: #0e82cf;
        color: white;
      }

      .dislike {
        background-color: #eb2805;
        color: white;
      }

      .post {
        background-color: #0ecfb4;
        margin-left: 10px;
      }

      .createdAt {
        float: right;
        margin-right: 10px;
      }
    `,
  ],
  template: `
    <h1>Tasks</h1>
    <mat-card *ngFor="let task of tasks" class="example-card">
        <mat-card-header>
          <div mat-card-avatar [ngClass]="task.type"></div>
          <mat-card-title>{{ task.title }}</mat-card-title>
          <mat-card-subtitle> {{ task.type }}</mat-card-subtitle>
        </mat-card-header>
      <hr />
      <mat-card-content>
        <p>
          {{ task.content }}
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button class="like">LIKE</button>
        <button mat-button class="dislike">DISLIKE</button>
        <button mat-button class="post">POST A SOLUTION</button>
        <p>likes: 3, dislikes: 4,</p>
      </mat-card-actions>
      <mat-card-footer>
        <p>
          Solutions: 4
          <span class="createdAt">
            Created: {{ task.createdAt | date: "yyyy.MM.dd. HH:mm" }}
          </span>
        </p>
      </mat-card-footer>
    </mat-card>
  `,
})
export class TaskComponent implements OnInit {
  public tasks: Task[];

  constructor(private taskService: TaskService) {}

  public ngOnInit() {
    this.taskService.getTasks();
    this.taskService.taskBehaviourSubject.subscribe((data) => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }
}
