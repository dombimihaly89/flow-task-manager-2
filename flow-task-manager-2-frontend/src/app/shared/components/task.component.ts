import { Component, Input, OnInit } from "@angular/core";
import { Task } from "~/app/models/task-model";
import { Rating } from "~/app/models/rating-model";

@Component({
  selector: "app-task",
  styles: [
    `
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

      .post {
        background-color: #0ecfb4;
        margin-left: 10px;
      }

      .createdAt {
        float: right;
        margin-right: 10px;
      }

      a {
        text-decoration: none;
      }
    `,
  ],
  template: `
    <mat-card>
      <a [routerLink]="['/tasks', task.id]">
        <mat-card-header>
          <div mat-card-avatar [ngClass]="task.type"></div>
          <mat-card-title>{{ task.title }}</mat-card-title>
          <mat-card-subtitle> {{ task.type }}</mat-card-subtitle>
          <mat-card-subtitle>Posted by: {{ task.username }} </mat-card-subtitle>
        </mat-card-header>
      </a>
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
        <div [ngSwitch]="likers.length">
          <p *ngSwitchCase="0">{{ likers.length }} people likes this</p>
          <p *ngSwitchCase="1">{{ likers[0].username }} likes this</p>
          <p *ngSwitchCase="2">{{ likers[0].username }} and {{ likers[1].username }} like this</p>
          <p *ngSwitchDefault>
            {{ likers[0].username }} and {{ likers[1].username }} and {{ likers.length - 2}} more people like this.
          </p>
        </div>
      </mat-card-actions>
      <mat-card-footer>
        <p>
          Solutions: {{ task.solutions }}
          <span class="createdAt">
            Created: {{ task.createdAt | date: "yyyy.MM.dd. HH:mm" }}
          </span>
        </p>
      </mat-card-footer>
    </mat-card>
  `,
})
export class TaskComponent implements OnInit {
  public likers: Rating[] = [];
  public disLikers: Rating[] = [];

  @Input()
  public task: Task;

  ngOnInit() {
    for (const rating of this.task.ratings) {
      if (rating.rating === "LIKE") {
        this.likers.push(rating);
      } else {
        this.disLikers.push(rating);
      }
    }
  }
}
