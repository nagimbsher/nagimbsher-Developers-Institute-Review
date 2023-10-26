
import { TodoList } from './todo.js';

const todoList = new TodoList();

todoList.addTask('Buy groceries');
todoList.addTask('Finish homework');
todoList.addTask('Go for a run');

todoList.markAsComplete('Finish homework');

console.log('Tasks:');
console.log(todoList.listTasks());
