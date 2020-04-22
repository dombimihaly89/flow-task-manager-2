import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './components/create-task.component';
import { TaskListComponent } from './components/task-list.component';

export const routes: Routes = [
  {
    path: 'new',
    component: CreateTaskComponent
  },
  {
    path: ':taskId',
    loadChildren: () => import('../solution/solution.module')
    .then((m) => m.SolutionModule),
  },
  {
    path: '',
    component: TaskListComponent,
  },

];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class TaskRoutingModule {

}
