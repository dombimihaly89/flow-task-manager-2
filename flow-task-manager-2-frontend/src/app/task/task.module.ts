import { NgModule } from '@angular/core';
import { SharedModule } from '~/app/shared/shared.module';
import { CreateTaskComponent } from './components/create-task.component';
import { TaskListComponent } from './components/task-list.component';
import { TaskRoutingModule } from './task-routing.module';
import { ReversePipe } from './components/reverse.pipe';

@NgModule({
  declarations: [
    TaskListComponent,
    CreateTaskComponent,
    ReversePipe,
  ],
  imports: [
    SharedModule,
    TaskRoutingModule,
  ]
})
export class TaskModule { }
