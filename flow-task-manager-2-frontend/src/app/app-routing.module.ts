import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '~/app/shared/pages/main-layout.component';

const routes: Routes = [
  {
    component: MainLayoutComponent,
    loadChildren: () => import('./welcome/welcome.module')
      .then((m) => m.WelcomeModule),
    path: '',
    pathMatch: 'full',
  },
  {
    component: MainLayoutComponent,
    loadChildren: () => import('./task/task.module')
      .then((m) => m.TaskModule),
    path: 'tasks',
    pathMatch: 'full',
  },
  {
    component: MainLayoutComponent,
    loadChildren: () => import('./solution/solution.module')
      .then((m) => m.SolutionModule),
    path: 'tasks/:taskId',
    pathMatch: 'full',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
