import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SolutionService } from '~/app/shared/services/solution.service';
import { Solution } from '~/app/models/solution-model';

@Component({
  selector: 'app-solution-list',
  styles: [`

  `],
  template: `
    <h1>Solutions</h1>
    <app-solution></app-solution>
  `
})
export class SolutionListComponent implements OnInit {

  public taskId: number;
  public solutions: Solution[] = [];

  constructor(
    private route: ActivatedRoute,
    private solutionService: SolutionService
  ) {
    route.paramMap.subscribe((data) => {
      this.taskId = +data.get('taskId')!;
    });
  }

  public ngOnInit() {
    this.solutionService.getSolutionsByTaskId(this.taskId);
    this.solutionService.solutionBehaviourSubject.subscribe((solutions: Solution[]) => {
      this.solutions = solutions;
    });

  }
}
