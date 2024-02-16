import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BaseComponent } from './base.component';

@NgModule({
  declarations: [BaseComponent],
  imports: [CommonModule, RouterModule],
})
export class BaseModule {}
