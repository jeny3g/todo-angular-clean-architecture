import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeModule, PagesRoutingModule],
  exports: [PagesRoutingModule],
})
export class PagesModule {}
