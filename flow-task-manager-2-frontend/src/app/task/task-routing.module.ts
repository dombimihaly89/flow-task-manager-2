import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list.component';

const routes: Routes = [
  {
    component: TaskListComponent,
    path: ''
  },
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class TaskRoutingModule {

}
