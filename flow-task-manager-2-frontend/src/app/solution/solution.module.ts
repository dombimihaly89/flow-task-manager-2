import { NgModule } from '@angular/core';
import { SolutionService } from '../shared/services/solution.service';
import { SharedModule } from '../shared/shared.module';
import { SolutionListComponent } from './components/solution-list.component';
import { SolutionRoutingModule } from './solution-routing.module';

@NgModule({
  declarations: [
    SolutionListComponent,
  ],
  imports: [
    SharedModule,
    SolutionRoutingModule,
  ],
  providers: [SolutionService]
})
export class SolutionModule {}
