import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BaseComponent } from './base.component';

@NgModule({
  declarations: [BaseComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule],
})
export class BaseModule {}
