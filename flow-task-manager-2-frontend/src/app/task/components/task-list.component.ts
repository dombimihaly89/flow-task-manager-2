import { Component, OnInit } from '@angular/core';
import { Task } from '~/app/models/task-model';
import { TaskService } from '~/app/shared/services/task.service';

@Component({
  selector: 'app-task-list',
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
    <button [routerLink]="['new']" mat-button>
      <span class="buttontext">Add Task</span>
    </button>
    <hr>
    <app-task *ngFor="let task of tasks | reverse" [task]="task"></app-task>
  `,
})
export class TaskListComponent implements OnInit {
  public tasks: Task[];

  constructor(
    private taskService: TaskService,
  ) {}

  public ngOnInit() {
    this.taskService.getTasks();
    this.taskService.tasksBehaviourSubject.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }
}
