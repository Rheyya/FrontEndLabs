import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  // Input property w/ default initialization
 @Input() todo: Todo = {task: 'Test', completed: false, duration: 10};

 // Output events for completing, editing, and removing a task
 @Output() complete = new EventEmitter<void>();
 @Output() remove = new EventEmitter<void>();
 @Output() edit = new EventEmitter<Todo>();

// Tracks editing state
isEditing = false;
editedTask = '';
editedDuration = 0;

//Emits complete event when 'complete' button is clicked
markComplete(){
  this.complete.emit();
}

// Emits remove event when 'x' button is clicked
removeTask(){
  this.remove.emit();
}

//Start editing the task 
startEditing(){
  this.isEditing = true;
  this.editedTask = this.todo.task;
  this.editedDuration = this.todo.duration;
}

// Save the edited task. The (...) is called the spread operator which creates a copy of the this.todo object'
// Combines propertird with new values that are specified,
// and overwrites the existing properties with new values
saveEdit(){
  this.edit.emit({...this.todo, 
    task: this.editedTask,
    duration: this.editedDuration
  });
  this.isEditing = false;
}

//Cancel editing 
cancelEdit(){
  this.isEditing
}
}
