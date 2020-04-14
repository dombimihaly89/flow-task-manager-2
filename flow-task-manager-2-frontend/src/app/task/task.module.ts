import { NgModule } from '@angular/core';
import { SharedModule } from '~/app/shared/shared.module';
import { TaskListComponent } from './components/task-list.component';
import { TaskComponent } from './components/task.component';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskComponent,
  ],
  imports: [
    SharedModule,
    TaskRoutingModule,
  ]
})
export class TaskModule { }
