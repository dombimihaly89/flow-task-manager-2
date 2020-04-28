import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolutionService } from '~/app/shared/services/solution.service';
import { Solution } from '~/app/models/solution-model';
import { TaskService } from '~/app/shared/services/task.service';
import { Task } from '~/app/models/task-model';

@Component({
  selector: 'app-solution-list',
  styles: [`

  `],
  template: `
    <h1>Solutions</h1>
    <app-task *ngIf="task" [task]="task" (rateEvent)="getTask()"></app-task>
    <app-solution *ngFor="let solution of solutions" [solution]="solution"></app-solution>

  `
})
export class SolutionListComponent implements OnInit {

  public taskId: number;
  public task: Task;

  public solutions: Solution[] = [];

  constructor(
    private route: ActivatedRoute,
    private solutionService: SolutionService,
    private taskService: TaskService
  ) {
    this.route.paramMap.subscribe((data) => {
      this.taskId = +data.get('taskId')!;
    });
  }

  public ngOnInit() {
    this.solutionService.getSolutionsByTaskId(this.taskId);
    this.solutionService.solutionBehaviourSubject.subscribe((solutions: Solution[]) => {
      this.solutions = solutions;
    });

    this.getTask();
  }

  public getTask() {
    this.taskService.getTask(this.taskId).subscribe((task: Task) => {
      this.task = task;
    });
  }
}
