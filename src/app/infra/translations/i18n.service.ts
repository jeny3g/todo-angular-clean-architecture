import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import includes from 'lodash/includes';

const languageKey = 'language';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  defaultLanguage: string;
  supportedLanguages: string[];

  constructor(private translate: TranslateService) {}

  private isLocalStorageAvailable(): boolean {
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  get language(): string {
    return this.translate.currentLang;
  }

  set language(language: string) {
    if (this.isLocalStorageAvailable()) {
      language = language || localStorage.getItem(languageKey) || this.translate.getBrowserCultureLang()!;
    } else {
      language = language || this.translate.getBrowserCultureLang()!;
    }

    let isSupportedLanguage = includes(this.supportedLanguages, language);

    if (language && !isSupportedLanguage) {
      language = language.split('-')[0];
      language = this.supportedLanguages.find((supportedLanguage) => supportedLanguage.startsWith(language)) || '';
      isSupportedLanguage = Boolean(language);
    }

    if (!isSupportedLanguage) {
      language = this.defaultLanguage;
    }

    this.translate.use(language);
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(languageKey, language);
    }
  }

  init(defaultLanguage: string, supportedLanguages: string[]) {
    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;
    this.language = '';

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (this.isLocalStorageAvailable()) {
        localStorage.setItem(languageKey, event.lang);
      }
    });
  }
}
