import { Component, OnInit } from "@angular/core";
import { Task } from "~/app/models/task-model";
import { TaskService } from "~/app/shared/services/task.service";
import { MatIconRegistry } from "@angular/material/icon";

@Component({
  selector: "app-task-list",
  styles: [
    `
      h1 {
        text-align: center;
        margin-bottom: 40px;
      }

      .mat-button {
        background: #82B80D;
        color: white;
        font-family: "Amatic SC";
        font-size: 2em;
      }

    `,
  ],
  template: `
    <h1>Tasks</h1>
    <button mat-button>
      <span class="buttontext">Add Task</span>
    </button>
    <hr>
    <app-task *ngFor="let task of tasks" [task]="task"></app-task>
  `,
})
export class TaskListComponent implements OnInit {
  public tasks: Task[];

  constructor(
    private taskService: TaskService,
    private matIconRegistry: MatIconRegistry
  ) {
    this.matIconRegistry.addSvgIcon("home", "assets/img/icon/home.svg");
  }

  public ngOnInit() {
    this.taskService.getTasks();
    this.taskService.taskBehaviourSubject.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }
}
