import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ITaskController } from '../../../../domain/interfaces/controllers/itask-controller';
import { TaskEntity } from '../../../../domain/entities/task-entity';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Lista';

  tasks$: Observable<TaskEntity[]> | null;
  tasksCreatedCount = 0;
  tasksCompletedCount = 0;

  constructor(private titleService: Title, private service: ITaskController) {
    this.titleService.setTitle($localize`${this.title}`);
  }

  ngOnInit(): void {
    this.tasks$ = this.service.get();
  }

  completeTask(task: TaskEntity): void {}

  deleteTask(task: TaskEntity): void {}
}
