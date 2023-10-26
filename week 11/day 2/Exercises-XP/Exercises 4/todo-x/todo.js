
class TodoList {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push({ task, completed: false });
    }
  
    markAsComplete(task) {
      const foundTask = this.tasks.find((t) => t.task === task);
      if (foundTask) {
        foundTask.completed = true;
      }
    }
  
    listTasks() {
      return this.tasks;
    }
  }
  
  export { TodoList };
  