import { NgModule } from '@angular/core';
import { SharedModule } from '~/app/shared/shared.module';
import { TaskListComponent } from './components/task-list.component';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  declarations: [
    TaskListComponent,
  ],
  imports: [
    SharedModule,
    TaskRoutingModule,
  ]
})
export class TaskModule { }
