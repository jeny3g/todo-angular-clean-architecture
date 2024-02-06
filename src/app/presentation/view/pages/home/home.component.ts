import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ITaskController } from '../../../../domain/interfaces/controllers/itask-controller';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  title = 'Lista';
  constructor(
    private titleService: Title,
    private service: ITaskController
  ) {
    this.titleService.setTitle($localize`${this.title}`);
  }
  ngOnInit(): void {
    // console.log(this.service.get());
  }
}
