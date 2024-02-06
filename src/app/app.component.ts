import { Component } from '@angular/core';
import { PresentationModule } from './presentation/presentation.module';
import { InfraModule } from './infra/infra.module';
import { DataModule } from './data/data.module';
import { DomainModule } from './domain/domain.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [InfraModule, DomainModule, DataModule, PresentationModule],
})
export class AppComponent {}
