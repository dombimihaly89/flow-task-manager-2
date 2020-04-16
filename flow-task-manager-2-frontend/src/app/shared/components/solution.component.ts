import { Component, Input } from "@angular/core";
import { Solution } from "~/app/models/solution-model";

@Component({
  selector: "app-solution",
  styles: [
    `
      .mat-card {
        width: 80vh;
        margin:auto;
        margin-bottom: 20px;
        background-color: rgba(250, 194, 231, 0.5);
      }

      mat-card-header {
        margin-left: 0px;
      }

      .mat-card-actions {
        margin-left: 0px;
        margin-right: 0px;
        padding-left: 0px;
        padding-right: 0px;
      }

      mat-card-footer {
        margin-left: 0px;
        margin-right: 0px;
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
      <mat-card-actions>
        <button mat-button class="like">LIKE</button>
        <button mat-button class="dislike">DISLIKE</button>
        <p>likes: 3, dislikes: 4,</p>
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
  @Input()
  public solution: Solution;
}
