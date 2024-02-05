import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BaseComponent } from './base.component';

@NgModule({
  declarations: [BaseComponent],
  imports: [CommonModule, RouterModule, TranslateModule, MatToolbarModule],
})
export class BaseModule {}
