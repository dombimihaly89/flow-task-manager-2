import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome-description',
  template: `
    <p>Welcome</p>
  `
})

export class WelcomeDescriptionComponent {
  public language: string;

  constructor(private readonly translate: TranslateService) {
  }

  public onLanguageChange() {
    this.translate.use(this.language === 'en' ? 'hu' : 'en');
    this.language = this.translate.currentLang;
  }
}
