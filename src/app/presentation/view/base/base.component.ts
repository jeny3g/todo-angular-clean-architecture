import { Component } from '@angular/core';
import { I18nService } from '../../../infra/translations/i18n.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss',
})
export class BaseComponent {
  constructor(private i18nService: I18nService) {}
  changeLanguage(lang: string): void {
    this.i18nService.language = lang;
  }
}
