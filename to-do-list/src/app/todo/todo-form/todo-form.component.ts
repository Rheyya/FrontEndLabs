import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-todo-form',
  standalone: false,
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
 newTask: string = '';
 newDuration: number = 0;
 newPriority?: 'NORMAL' | 'HIGH' | 'LOW';

 // output event that emits new Todo objects when saved
 @Output() save = new EventEmitter<Todo>();

 // Method that handles form submission
  addTodo(){
    // Validates form fields (trim whitespace and check duration > 0)
    if (this.newTask.trim() !== '' && this.newDuration > 0){
      // Creates new Todo object with form values
      const newTodo: Todo = {
        task: this.newTask,
        completed: false,
        duration: this.newDuration,
        priority: this.newPriority
      };

      // Emit a new Todo object to parent component
      this.save.emit(newTodo);

      // Reset form fields after submission
      this.newTask = '';
      this.newDuration = 0;
      this.newPriority = 'NORMAL';

    }
  }
}
