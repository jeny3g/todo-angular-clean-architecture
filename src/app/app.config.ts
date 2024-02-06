import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { InfraModule } from './infra/infra.module';
import { DomainModule } from './domain/domain.module';
import { DataModule } from './data/data.module';
import { PresentationModule } from './presentation/presentation.module';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      HttpClientModule,
      InfraModule,
      DomainModule,
      DataModule,
      PresentationModule
    ),
    provideAnimations(),
  ],
};
