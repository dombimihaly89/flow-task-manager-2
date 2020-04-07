import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  styles: [
    `
      nav {
        font-family: "Amatic SC";
        font-size: 1.2em;
      }

      .navbar-brand {
        padding: 10px;
        border-style: solid;
        border-radius: 50%;
      }
    `,
  ],
  template: `
    <nav class="navbar navbar-expand-sm navbar-light bg-info">
      <a class="navbar-brand text-white" href="#">Flow Task Manager</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarMenu"
        aria-controls="navbarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
        [attr.aria-expanded]="!navbarCollapsed"
        (click)="navbarCollapsed = !navbarCollapsed"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarMenu" [ngbCollapse]="navbarCollapsed">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#"
              >Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Tasks</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
})
export class HeaderComponent {
  public navbarCollapsed: boolean = true;
}
