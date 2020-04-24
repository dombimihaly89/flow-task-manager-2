import { Component } from "@angular/core";
import { taskTypes, taskDifficulties } from "../task-types-difficulties";

@Component({
  selector: "app-create-task",
  styles: [`
  .mat-radio-button {
    padding-left: 20px;
    color: green;
  }

  h1 {
    color: grey;
  }

  mat-label {
    color: grey;
  }

  `],
  template: `
    <h1>New Task</h1>
    <form>
      <mat-label>Type:</mat-label>
      <mat-select>
        <mat-option
          *ngFor="let taskType of taskTypes | keyvalue"
          [value]="taskType.value"
        >
          {{ taskType.key }}
        </mat-option>
      </mat-select>
      <mat-form-field>
        <mat-label>Title</mat-label>
        <input matInput placeholder="Title" />
      </mat-form-field>
      <br />
      <mat-form-field class="taskContent">
        <mat-label>Conent</mat-label>
        <textarea matInput placeholder="Content"></textarea>
      </mat-form-field>
      <br>
      <label id="example-radio-group-label">Difficulty:</label>
      <mat-radio-group
      color="primary"
        aria-labelledby="example-radio-group-label"
        class="example-radio-group"
      >
        <mat-radio-button
          class="example-radio-button"
          *ngFor="let difficulty of taskDifficulties | keyvalue"
          [value]="difficulty.value"
        >
          {{ difficulty.key }}
        </mat-radio-button>
      </mat-radio-group>
    </form>
  `,
})
export class CreateTaskComponent {
  taskTypes = taskTypes;
  taskDifficulties = taskDifficulties;
}
