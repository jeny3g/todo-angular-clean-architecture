import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PresentationModule } from './presentation/presentation.module';
import { InfraModule } from './infra/infra.module';
import { DataModule } from './data/data.module';
import { DomainModule } from './domain/domain.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[],
  standalone:true,
  imports: [
    DomainModule,
    DataModule,
    InfraModule,
    PresentationModule,
    TranslateModule
  ]
})
export class AppComponent {
  constructor(
    private router: Router,
  ) { }
}
