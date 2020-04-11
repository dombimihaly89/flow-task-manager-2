import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  styles: [
    `
      nav {
        font-family: "Amatic SC";
        font-size: 1.2em;
      }

      .nav-link:hover {
        animation-name: grow;
        animation-duration: 1.5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      }

      .navbar-brand {
        padding: 10px;
        border-style: solid;
        border-radius: 50%;
      }

      .navbar-brand:hover {
        animation-name: rocking;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: ease-out;
      }

      .collapsed-item {
        padding-left: 40px;
      }

      @keyframes rocking {
        0% {
          transform: rotate(0deg);
        }
        33% {
          transform: rotate(15deg);
        }
        66% {
          transform: rotate(-15deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }

      @keyframes grow {
        100% {
          transform: scale(1.3);
        }
      }
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

      <div
        class="collapse navbar-collapse"
        id="navbarMenu"
        [ngbCollapse]="navbarCollapsed"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" [ngClass]="{'collapsed-item': !navbarCollapsed}" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [ngClass]="{'collapsed-item': !navbarCollapsed}" href="#">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [ngClass]="{'collapsed-item': !navbarCollapsed}" href="#">Tasks</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
})
export class HeaderComponent {
  public navbarCollapsed: boolean = true;
}
