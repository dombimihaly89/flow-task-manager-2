import { Component } from "@angular/core";

@Component({
  template: `
    <h2 mat-dialog-title>Do you want to delete this task?</h2>
    <div>
      <span class="buttons">
    <mat-dialog-actions>
      <button class="yes mat-button" mat-button>Yes</button>
      <button class="no mat-button" mat-button>
        No
      </button>
    </mat-dialog-actions>
    </span>
    </div>
  `,
  styles: [
    `
      h2 {
        font-family: "Amatic SC";
        text-align: center;
      }
      .mat-button {
        color: white;
        font-family: "Amatic SC";
        font-size: 2em;
        margin-top: 20px;
        margin-bottom: 15px;
      }
      .yes {
        background: #82b80d;
        margin-right: 20px;
      }
      .no {
        background: #eb2805;
      }
      div {
        position: relative;
      }
      .buttons {
        margin: 0;
        position: absolute;
        top: 30px;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
    `,
  ],
})
export class TaskDeleteComponent {}
