import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewModule } from './view/view.module';

import { ITaskController } from '../domain/interfaces/controllers/itask-controller';
import { TaskControllerService } from './controllers/task-controller.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewModule
  ],
  exports: [ViewModule],
  providers: [
    { provide: ITaskController, useClass: TaskControllerService },
  ]
})
export class PresentationModule { }
