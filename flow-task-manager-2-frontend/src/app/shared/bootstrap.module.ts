import { NgModule } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 

@NgModule({
  declarations: [],
  exports: [
    NgbCollapseModule,
    NgbModule,
  ],
  imports: [
    NgbCollapseModule,
    NgbModule,
  ],
})
export class BootstrapModule { }
