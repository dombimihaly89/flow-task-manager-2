import { Component, Input } from '@angular/core';
import { Rating } from '~/app/models/rating-models/rating-model';

@Component({
  selector: 'app-likers',
  template: `
  <table>
      <tr>
        <td class="likers">
          <div [ngSwitch]="likers.length">
            <p *ngSwitchCase="0">{{ likers.length }} people likes this.</p>
            <p *ngSwitchCase="1">{{ likers[0].username }} likes this.</p>
            <p *ngSwitchCase="2">
              {{ likers[0].username }} and {{ likers[1].username }} like
              this.
            </p>
            <p *ngSwitchDefault>
              {{ likers[0].username }} and {{ likers[1].username }} and
              {{ likers.length - 2 }} more people like this.
            </p>
          </div>
        </td>
        <td class="dislikers">
          <div [ngSwitch]="dislikers.length">
            <p *ngSwitchCase="0">
              {{ dislikers.length }} people dislikes this.
            </p>
            <p *ngSwitchCase="1">
              {{ dislikers[0].username }} dislikes this.
            </p>
            <p *ngSwitchCase="2">
              {{ dislikers[0].username }} and
              {{ dislikers[1].username }} dislike this.
            </p>
            <p *ngSwitchDefault>
              {{ dislikers[0].username }} and
              {{ dislikers[1].username }} and
              {{ dislikers.length - 2 }} more people dislike this.
            </p>
          </div>
        </td>
      </tr>
    </table>
    `,
})
export class LikersComponent {

  @Input()
  likers: Rating[] = [];

  @Input()
  dislikers: Rating[] = [];

}