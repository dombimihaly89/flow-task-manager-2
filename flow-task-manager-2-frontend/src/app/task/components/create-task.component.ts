import { Component } from '@angular/core';

@Component({
  selector: 'app-create-task',
  styles: [``],
  template: `
  <h1>New Task</h1>
  <a class="nav-link" [routerLink]="['/new']"> Tasklist </a>
  `,
})
export class CreateTaskComponent {

}