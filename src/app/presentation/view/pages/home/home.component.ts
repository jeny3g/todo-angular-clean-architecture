import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Lista';
  constructor(private titleService: Title) {
    this.titleService.setTitle($localize`${this.title}`);
  }
}
