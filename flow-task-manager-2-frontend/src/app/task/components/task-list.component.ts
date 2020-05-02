import { Component, OnInit } from "@angular/core";
import { Task } from "~/app/models/task-model";
import { TaskService } from "~/app/shared/services/task.service";
import { taskTypes } from "../task-types-difficulties";

@Component({
  selector: "app-task-list",
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
      .task-selector {
        margin-right: 20px;
      }
      .type-dropdown {
        display: inline !important;
      }
      .sort-by-date {
        margin-left: 20px;
        background-color: #c4af04;
      }
      .sort-by-like {
        margin-left: 20px;
        background-color: #0e82cf;
      }
    `,
  ],
  template: `
    <h1>Tasks</h1>
    <button [routerLink]="['new']" mat-button>
      <span class="buttontext">Add Task</span>
    </button>
    <br />
    <mat-label class="task-selector">Task type</mat-label>
    <mat-select
      class="type-dropdown"
      #typeSelector
      (selectionChange)="filterByTask(typeSelector.value)"
    >
      <mat-option
        style="display: inline"
        *ngFor="let type of taskTypes | keyvalue"
        [value]="type.value"
      >
        {{ type.value }}
      </mat-option>
    </mat-select>
    <button mat-button class="sort-by-date" (click)="sortByDate(!sortedByDate)">
      Sort By Date
    </button>
    <button mat-button class="sort-by-like" (click)="sortByLike()">
      Sort By Like
    </button>
    <hr />
    <app-task *ngFor="let task of filteredTasks" [task]="task"></app-task>
  `,
})
export class TaskListComponent implements OnInit {
  public tasks: Task[];
  public taskTypes = taskTypes;

  public filteredTasks: Task[];
  public sortedByDate: boolean = true;

  constructor(private taskService: TaskService) {}

  public ngOnInit() {
    this.taskService.getTasks();
    this.taskService.tasksBehaviourSubject.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      this.filteredTasks = this.tasks.slice(0);
      this.sortByDate(this.sortedByDate);
    });
  }

  public filterByTask(value) {
    if (value === "ALL") {
      this.filteredTasks = this.tasks;
    } else {
      this.filteredTasks = this.tasks
        .filter((task) => task.type === value)
        .slice(0);
    }
  }

  public sortByDate(sortedByDate: boolean) {
    this.sortedByDate = sortedByDate;
    if (sortedByDate) {
      this.filteredTasks.sort((t1, t2) => {
        if (t1.createdAt > t2.createdAt) {
          return -1;
        } else if (t1.createdAt === t2.createdAt) {
          return 0;
        } else {
          return 1;
        }
      });
    } else {
      this.filteredTasks.sort((t1, t2) => {
        if (t1.createdAt > t2.createdAt) {
          return 1;
        } else if (t1.createdAt === t2.createdAt) {
          return 0;
        } else {
          return -1;
        }
      });
    }
  }

  public sortByLike() {
    this.sortedByDate = false;
    this.filteredTasks.sort((t1, t2) => {
      return (
        t2.ratings.filter((r) => r.rating === "LIKE").length -
        t1.ratings.filter((r) => r.rating === "LIKE").length
      );
    });
  }
}
