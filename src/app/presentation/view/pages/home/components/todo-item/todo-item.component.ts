import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskEntity } from '../../../../../../domain/entities/task-entity';
import { ITaskController } from '../../../../../../domain/interfaces/controllers/itask-controller';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todo: TaskEntity;
  @Output() remove = new EventEmitter<number>();
  @Output() toggleCompleted = new EventEmitter<TaskEntity>();
  @Output() edit = new EventEmitter<TaskEntity>();

  editMode = false;

  constructor(private service: ITaskController) {}

  onRemove() {
    this.remove.emit(this.todo.id);
  }

  onToggleCompleted() {
    this.toggleCompleted.emit({
      ...this.todo,
      completed: !this.todo.completed,
    } as TaskEntity);
  }

  startEdit() {
    this.editMode = true;
  }

  saveEdit(taskId: number, newTask: string) {
    const updatedTask: TaskEntity = { ...this.todo, id: taskId, task: newTask };
    this.service.update(updatedTask).subscribe((teste) => {
      // Success! Exit edit mode and optionally refresh task list
      this.editMode = false;
    });
  }
}
