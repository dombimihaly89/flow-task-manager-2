import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-layout',
  template: `
  <app-header></app-header>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})

export class MainLayoutComponent {

}
