import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  styles: [
    `
      @import url("https://fonts.googleapis.com/css?family=Work+Sans:300,600");

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      .header-body {
        --background: rgba(33, 141, 132, 1);
        margin: 0;
        background: #222;
        font-family: "Work sans", sans-serif;
        font-weight: 400;
      }

      .content {
        height: 200vh;
        background-image: url(//unsplash.it/1000/1000);
        background-color: #333;
        background-blend-mode: multiply;
        background-size: cover;
        display: grid;
        place-items: center;
      }

      header {
        background: var(--background);
      }

      h1 {
        margin-top: 0px;
      }
    `,
  ],
  template: `
    <div class="header-body">
      <header>
        <h1 class="logo">Header component</h1>

        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  `,
})
export class HeaderComponent {}
