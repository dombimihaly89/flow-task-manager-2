import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list.component';
import { CreateTaskComponent } from './components/create-task.component';

export const routes: Routes = [
  {
    path: 'new',
    component: TaskListComponent
  },
  {
    path: '',
    component: CreateTaskComponent,
  },

];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class TaskRoutingModule {

}
