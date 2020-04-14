import { Component, OnInit } from "@angular/core";
import { Task } from '~/app/models/task-model';
import { TaskService } from '~/app/shared/services/task.service';

@Component({
  selector: 'app-task',
  styles: [`
  `,
  ],
  template: `
  <h1>Task Component</h1>
  `
})
export class TaskComponent implements OnInit {

  public tasks: Task[];

  constructor(
    private taskService: TaskService
  ) {}

  public ngOnInit(){
    this.taskService.getTasks();
    this.taskService.taskBehaviourSubject.subscribe((data) => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }

  
}