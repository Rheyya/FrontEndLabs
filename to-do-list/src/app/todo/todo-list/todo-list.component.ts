import { Component } from '@angular/core';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {

  todos: Todo[] = [
    {task: 'Complete Lab', completed: false, duration: 120},
    {task: 'Study For Assessment', completed: false, duration: 90},
    {task: 'Relax', completed: false, duration: 60}
  ]

  addTodo(todo:Todo){
    this.todos.push(todo);
  }

  completeTask(index:number) : void{
    this.todos[index].completed = true;
  }

  removeTask(index:number) : void{
    this.todos.splice(index, 1);
  }
}
