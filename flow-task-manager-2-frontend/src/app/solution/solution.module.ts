import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SolutionListComponent } from './components/solution-list.component';
import { SolutionComponent } from './components/solution.component';
import { SolutionRoutingModule } from './solution-routing.module';

@NgModule({
  declarations: [
    SolutionListComponent,
    SolutionComponent,
  ],
  imports: [
    SharedModule,
    SolutionRoutingModule,
  ],
})
export class SolutionModule {}
