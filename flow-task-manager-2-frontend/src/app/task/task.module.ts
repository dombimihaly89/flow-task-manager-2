import { NgModule } from '@angular/core';
import { SharedModule } from '~/app/shared/shared.module';
import { TaskComponent } from './components/task.component';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  declarations: [
    TaskComponent,
  ],
  imports: [
    SharedModule,
    TaskRoutingModule,
  ]
})
export class TaskModule { }
