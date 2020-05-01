import { Component, OnInit } from "@angular/core";
import { Task } from "~/app/models/task-model";
import { TaskService } from "~/app/shared/services/task.service";
import { taskTypes } from '../task-types-difficulties';

@Component({
  selector: 'app-task-list',
  styles: [
    `
      .mat-button {
        background: #82b80d;
        color: white;
        font-family: "Amatic SC";
        font-size: 2em;
        margin-top: 20px;
        margin-bottom: 15px;
      }
     /*  .task-selector {
        margin-left: 10px;
      } */
    `,
  ],
  template: `
    <h1>Tasks</h1>
    <button [routerLink]="['new']" mat-button>
      <span class="buttontext">Add Task</span>
    </button>
    <br>
      <mat-label class="task-selector">Task type</mat-label>
      <mat-select #typeSelector (selectionChange)="filterByTask(typeSelector.value)">
        <mat-option *ngFor="let type of taskTypes | keyvalue" [value]="type.value">
          {{ type.value }}
        </mat-option>
      </mat-select>
    <hr />
    <app-task *ngFor="let task of filteredTasks | reverse" [task]="task"></app-task>
  `,
})
export class TaskListComponent implements OnInit {
  public tasks: Task[];
  public taskTypes = taskTypes;

  public filteredTasks: Task[];

  constructor(private taskService: TaskService) {}

  public ngOnInit() {
    this.taskService.getTasks();
    this.taskService.tasksBehaviourSubject.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      this.filteredTasks = this.tasks.slice(0);
    });
  }

  public filterByTask(value) {
    if (value === 'ALL') {
      this.filteredTasks = this.tasks;
    } else {
      this.filteredTasks = this.tasks.filter((task) => task.type === value)
      .slice(0);
    }
  }
}
