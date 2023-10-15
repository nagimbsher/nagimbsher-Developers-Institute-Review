// 🌟 Exercise 4: Todo List Using ES6 Module Syntax
// Instructions
// Create a directory named todoApp.

// Inside the todoApp directory, create two files: todo.js and app.js.

// In todo.js, define an ES6 module that exports a TodoList class.

// The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.

// Export the TodoList class.

// In app.js, import the TodoList class from the todo.js module.

// Create an instance of the TodoList class.

// Add a few tasks, mark some as complete, and list all tasks.

// Run app.js and verify that the todo list operations are working correctly.



import { Todo } from "./todo.js";

export class TodoManager {
  todoList = [];

  constructor() {
    this.todoList = [];
  }

  addTodo(todoName) {
    this.todoList.push(new Todo(this.todoList.length, todoName));
  }

  removeTodo(id) {
    this.todoList = this.todoList.filter((todo) => todo.id !== id);
  }

  updateTodo(id) {
    this.todoList = this.todoList.map((todo) => {
      if (todo.id === id) todo.toggleStatus();
      return todo;
    });
  }
}