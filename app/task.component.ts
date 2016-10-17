import { Component, Input } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-display',
  template: `
  <div clas="jumbotron">
    <h3><input *ngIf="task.done === true" type="checkbox" checked (click)="toggleDone(false)"/>
    <input *ngIf="task.done === false" type="checkbox" (click)="toggleDone(true)"/>  {{ task.description }} {{ task.id }}</h3>
  </div>
  `
})
export class TaskComponent {
  @Input() task: Task;
  toggleDone(setCompleteness: boolean) {
    this.task.done = setCompleteness;
  }
}
