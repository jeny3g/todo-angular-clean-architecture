import { Component, LOCALE_ID } from '@angular/core';
import { PresentationModule } from './presentation/presentation.module';
import { InfraModule } from './infra/infra.module';
import { DataModule } from './data/data.module';
import { DomainModule } from './domain/domain.module';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [InfraModule, DomainModule, DataModule, PresentationModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class AppComponent {}
