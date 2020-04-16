import { Component, Input, OnInit } from "@angular/core";
import { Rating } from "~/app/models/rating-model";
import { Task } from "~/app/models/task-model";

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
        box-shadow: 2px 2px 1px -1px rgba(0,0,0,.2), -2px 10px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
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

      .mat-card-actions {
        margin-left: 0px;
        margin-right: 0px;
        padding-left: 0px;
        padding-right: 0px;
      }

      .mat-card-footer {
        margin-left: 0px;
        margin-right: 0px;
      }

      td {
        margin-right: 10px;
      }

      .likers {
        color: #0e82cf;
      }

      .dislikers {
        color: #eb2805;
      }

      .solutions {
        width: 120px;
        height: 36px;
        background-color: #82B80D;
        padding: 10px 21px 10px 25px;
        color: white;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 500;
        border-radius: 4px;
      }

      .solution-number {
        padding: 10px;
        background-color: grey;
        margin-left: 5px;
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
        <hr>
        <table>
          <tr>
            <td class="likers">
              <div [ngSwitch]="likers.length">
                <p *ngSwitchCase="0">{{ likers.length }} people likes this.</p>
                <p *ngSwitchCase="1">{{ likers[0].username }} likes this.</p>
                <p *ngSwitchCase="2">
                  {{ likers[0].username }} and {{ likers[1].username }} like
                  this.
                </p>
                <p *ngSwitchDefault>
                  {{ likers[0].username }} and {{ likers[1].username }} and
                  {{ likers.length - 2 }} more people like this.
                </p>
              </div>
            </td>
            <td class="dislikers">
              <div [ngSwitch]="dislikers.length">
                <p *ngSwitchCase="0">
                  {{ dislikers.length }} people dislikes this.
                </p>
                <p *ngSwitchCase="1">
                  {{ dislikers[0].username }} dislikes this.
                </p>
                <p *ngSwitchCase="2">
                  {{ dislikers[0].username }} and
                  {{ dislikers[1].username }} dislike this.
                </p>
                <p *ngSwitchDefault>
                  {{ dislikers[0].username }} and
                  {{ dislikers[1].username }} and
                  {{ dislikers.length - 2 }} more people dislike this.
                </p>
              </div>
            </td>
          </tr>
        </table>
        <button mat-button class="like">LIKE</button>
        <button mat-button class="dislike">DISLIKE</button>
        <button mat-button class="post">POST A SOLUTION</button>
      </mat-card-actions>
      <mat-card-footer>
        <p>
          <a [routerLink]="['/tasks', task.id]">
          <span class="solutions">
          SOLUTIONS: <span class="solution-number">{{ task.solutions }}</span>
          </span>
          </a>
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
  public dislikers: Rating[] = [];

  @Input()
  public task: Task;

  ngOnInit() {
    for (const rating of this.task.ratings) {
      if (rating.rating === "LIKE") {
        this.likers.push(rating);
      } else {
        this.dislikers.push(rating);
      }
    }
  }
}
