import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '~/app/shared/material.module';
import { MainLayoutComponent } from '~/app/shared/pages/main-layout.component';
import { ApiCommunicationService } from '~/app/shared/services/api-communication.service';
import { ConfigurationService } from '~/app/shared/services/configuration.service';
import { BootstrapModule } from './bootstrap.module';
import { HeaderComponent } from './components/header.component';
import { TaskComponent } from './components/task.component';
import { TaskService } from './services/task.service';
import { SolutionComponent } from './components/solution.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { LikersComponent } from './components/likers.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    TaskComponent,
    SolutionComponent,
    LikersComponent,
    ReversePipe,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BootstrapModule,
    TaskComponent,
    SolutionComponent,
    ReversePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BootstrapModule,
    TranslateModule.forChild(),
    RouterModule,
  ],
  providers: [
    ApiCommunicationService,
    ConfigurationService,
    TaskService,
    ReversePipe,
  ],
})
export class SharedModule { }
