import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolutionListComponent } from './components/solution-list.component';

const routes: Routes = [
  {path: '', component: SolutionListComponent},
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class SolutionRoutingModule {}
