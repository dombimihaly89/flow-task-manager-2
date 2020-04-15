import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solution-list',
  styles: [`
  
  `],
  template: `
  
  `
})
export class SolutionListComponent implements OnInit {

  public taskId: number;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe((data) => {
      this.taskId = +data.get('taskId')!;
    });
  }

  public ngOnInit() {

  }
}