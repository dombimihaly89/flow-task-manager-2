import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Solution } from '~/app/models/solution-model';
import { ApiCommunicationService } from './api-communication.service';

@Injectable()
export class SolutionService {

  constructor(private apiCommunicationService: ApiCommunicationService) {}

  private _solutionBehaviourSubject: BehaviorSubject<Solution[]> = new BehaviorSubject<Solution[]>([]);

  public get solutionBehaviourSubject() {
    return this._solutionBehaviourSubject;
  }

  public getSolutionsByTaskId(taskId: number) {
    this.apiCommunicationService.solution()
    .getSolutionsByTaskId(taskId)
    .subscribe((solutions: Solution[]) => {
      this._solutionBehaviourSubject.next(solutions);
    });
  }
}
