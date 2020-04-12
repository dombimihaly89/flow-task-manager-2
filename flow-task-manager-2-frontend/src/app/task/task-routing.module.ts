import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './components/task.component';

const routes: Routes = [
  {
    component: TaskComponent,
    path: ''
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class TaskRoutingModule {

}
