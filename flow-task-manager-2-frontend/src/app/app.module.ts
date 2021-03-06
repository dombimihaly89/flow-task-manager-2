import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from '~/app/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SolutionService } from './shared/services/solution.service';
import { RatingService } from './shared/services/rating.service';

// http loader for translations file
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    // Own modules
    SharedModule,

    // ngx-translate
    TranslateModule.forRoot({
      loader: {
        deps: [HttpClient],
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
      }
    }),

    NgbModule,
  ],
  providers: [
  {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
  SolutionService,
  RatingService,
]
})
export class AppModule {
}
