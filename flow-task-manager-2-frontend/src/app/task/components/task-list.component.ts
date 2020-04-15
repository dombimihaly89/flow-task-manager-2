import { Component, OnInit } from '@angular/core';
import { Task } from '~/app/models/task-model';
import { TaskService } from '~/app/shared/services/task.service';

@Component({
  selector: 'app-task-list',
  styles: [
    `
      h1 {
        text-align: center;
      }
    `,
  ],
  template: `
    <h1>Tasks</h1>
    <app-task *ngFor="let task of tasks" [task]="task"></app-task>
  `,
})
export class TaskListComponent implements OnInit {
  public tasks: Task[];

  constructor(private taskService: TaskService) {}

  public ngOnInit() {
    this.taskService.getTasks();
    this.taskService.taskBehaviourSubject.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }
}
