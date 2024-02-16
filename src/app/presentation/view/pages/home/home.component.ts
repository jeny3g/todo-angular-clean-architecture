import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tarefas: string[] = [];
  novaTarefa: string = '';

  constructor() {}

  ngOnInit(): void {}

  adicionarTarefa() {
    if (this.novaTarefa === '') {
      return;
    }

    this.tarefas.push(this.novaTarefa);
    this.novaTarefa = '';
  }

  removerTarefa(tarefa: string) {
    const index = this.tarefas.indexOf(tarefa);
    if (index > -1) {
      this.tarefas.splice(index, 1);
    }
  }
}
