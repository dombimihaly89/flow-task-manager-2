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

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    TaskComponent,
    SolutionComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BootstrapModule,
    TaskComponent,
    SolutionComponent,
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
  ],
})
export class SharedModule { }
