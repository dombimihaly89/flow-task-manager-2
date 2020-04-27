import { Component } from "@angular/core";
import { taskTypes, taskDifficulties } from "../task-types-difficulties";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '~/app/shared/services/task.service';
import { Task } from '~/app/models/task-model';
import { Router } from '@angular/router';

@Component({
  selector: "app-create-task",
  styles: [
    `
      .mat-radio-button {
        padding-left: 20px;
        color: green;
      }

      h1 {
        padding: 5px;
        width: 400px;
        background: #82b80d;
        color: white;
        font-family: "Amatic SC";
        font-size: 2em;
        border-radius: 5%;
      }

      mat-label {
        color: grey;
      }

      .save {
        width: 120px;
        background-color: #82B80D;
        padding: 2px;
        color: white;
        font-family: "Amatic SC";
        font-size: 2em;
        font-weight: 500;
        border-radius: 4px;
      }

      .cancel {
        width: 120px;
        margin-left: 10px;
        background-color: #eb2805;
        padding: 2px;
        color: white;
        font-family: "Amatic SC";
        font-size: 2em;
        font-weight: 500;
        border-radius: 4px;
      }
    `,
  ],
  template: `
    <h1>New Task</h1>
    <form [formGroup]="taskCreatingForm" (ngSubmit)="createTask(taskCreatingForm.value)">
      <mat-label>Type:</mat-label>
      <mat-select formControlName="type">
        <mat-option
          *ngFor="let taskType of taskTypes | keyvalue"
          [value]="taskType.value"
        >
          {{ taskType.key }}
        </mat-option>
      </mat-select>
      <mat-form-field>
        <mat-label>Title</mat-label>
        <input formControlName="title" matInput placeholder="Title" />
      </mat-form-field>
      <br />
      <mat-form-field class="taskContent">
        <mat-label>Conent</mat-label>
        <textarea formControlName="content" matInput placeholder="Content"></textarea>
      </mat-form-field>
      <br />
      <label id="example-radio-group-label">Difficulty:</label>
      <mat-radio-group
        color="primary"
        aria-labelledby="example-radio-group-label"
        class="example-radio-group"
        formControlName="difficulty"
      >
        <mat-radio-button
          class="example-radio-button"
          *ngFor="let difficulty of difficultyLevel"
          [value]="difficulty"
        >
          {{ difficulty | titlecase }}
        </mat-radio-button>
        <br>
        <button mat-button class="save" [disabled]=taskCreatingForm.invalid>Save</button>
        <button mat-button class="cancel">Cancel</button>
      </mat-radio-group>
    </form>
  `,
})
export class CreateTaskComponent {
  taskTypes = taskTypes;
  difficultyLevel;
  username: string = 'Misi';


  taskCreatingForm: FormGroup;

  constructor(private taskService: TaskService, private router: Router) {

    this.difficultyKeys();

    this.taskCreatingForm = new FormGroup({
      type: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      content: new FormControl('', [Validators.required]),
      difficulty: new FormControl('', [Validators.required])
    })
  }

  difficultyKeys() {
    this.difficultyLevel = Object.keys(taskDifficulties);
    this.difficultyLevel = this.difficultyLevel.slice(this.difficultyLevel.length / 2);
  }

  createTask(newTask: Task) {
    newTask.username = this.username;
    this.taskService.createTask(newTask).subscribe((data) => {
      console.log(data);
    });
    this.router.navigate(['tasks']);
  }
}
