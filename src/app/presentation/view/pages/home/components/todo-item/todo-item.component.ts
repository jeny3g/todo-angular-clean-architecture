import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TodoItem {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todo: TodoItem;
  @Input() index: number;
  @Output() remove = new EventEmitter<number>();
  @Output() toggleCompleted = new EventEmitter<number>();
  @Output() edit = new EventEmitter<{ index: number; newTask: string }>();

  editMode = false;

  onRemove() {
    this.remove.emit(this.index);
  }

  onToggleCompleted() {
    this.toggleCompleted.emit(this.index);
  }

  startEdit() {
    this.editMode = true;
  }

  saveEdit(newTask: string) {
    this.edit.emit({ index: this.index, newTask });
    this.editMode = false;
  }
}
