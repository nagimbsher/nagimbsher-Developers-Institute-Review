// Objective: Enhance the Task Manager application by adding new features, including the ability to edit tasks and filter tasks by completion status, using useContext, useReducer, and useRef.

// Instructions
// Set up a new React project using create-react-app or your preferred method.

// Extend the existing Task Manager application (from the previous exercise) by adding the following features:

// Edit Tasks: Allow users to edit existing tasks by clicking on them.

// Filter Tasks: Implement buttons to filter tasks by completion status (e.g., show all, show completed, show active).

// Use useRef to enable task editing and update the task text when the user makes changes.

// Implement actions in the reducer for editing tasks and filtering tasks.

// Hints:

// To enable task editing, you can add an “Edit” button next to each task that, when clicked, activates an input field for editing the task text.

// Use a state variable or a ref to track the edited task text before saving.

// Implement actions like EDIT_TASK and FILTER_TASKS in the reducer to handle task editing and filtering.

// Use conditional rendering to display tasks based on the selected filter.

// Example Starter Code:

// You can start with the Task Manager code provided in the previous exercise and extend it to include the new features described above.

// Feel free to adapt and customize the example code to create your enhanced Task Manager application. This daily challenge will help you practice combining multiple React concepts to build a more complex application.





import React from 'react';
import EditTask from './EditTask';
import FilterTasks from './FilterTasks';
import { TaskProvider } from './TaskContext';

function App() {
  const task = { id: 1, text: 'Example Task' }; 
  return (
    <TaskProvider>
      <div>
        <EditTask task={task} />
        <FilterTasks />
      </div>
    </TaskProvider>
  );
}

export default App;





// import React, { createContext, useContext, useReducer, useState } from "react";

// // Context for managing tasks
// const TaskContext = createContext();

// // Actions
// const ADD_TASK = "ADD_TASK";
// const COMPLETE_TASK = "COMPLETE_TASK";
// const REMOVE_TASK = "REMOVE_TASK";

// // Reducer function
// function taskReducer(state, action) {
//   switch (action.type) {
//     case ADD_TASK:
//       const newTask = { id: Date.now(), text: action.text, completed: false };
//       return [...state, newTask];
//     case COMPLETE_TASK:
//       return state.map((task) =>
//         task.id === action.id ? { ...task, completed: true } : task
//       );
//     case REMOVE_TASK:
//       return state.filter((task) => task.id !== action.id);
//     default:
//       return state;
//   }
// }

// function TaskProvider({ children }) {
//   const [tasks, dispatch] = useReducer(taskReducer, []);

//   return (
//     <TaskContext.Provider value={{ tasks, dispatch }}>
//       {children}
//     </TaskContext.Provider>
//   );
// }

// function TaskAdder() {
//   const { dispatch } = useContext(TaskContext);
//   const [taskText, setTaskText] = useState("");

//   const handleAddTask = () => {
//     if (taskText.trim() === "") return;
//     dispatch({ type: ADD_TASK, text: taskText });
//     setTaskText("");
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Add a new task"
//         value={taskText}
//         onChange={(e) => setTaskText(e.target.value)}
//       />
//       <button onClick={handleAddTask}>Add Task</button>
//     </div>
//   );
// }

// function TaskList() {
//   const { tasks, dispatch } = useContext(TaskContext);

//   const handleCompleteTask = (id) => {
//     dispatch({ type: COMPLETE_TASK, id });
//   };

//   const handleRemoveTask = (id) => {
//     dispatch({ type: REMOVE_TASK, id });
//   };

//   return (
//     <div>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id}>
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => handleCompleteTask(task.id)}
//             />
//             {task.text}
//             <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <TaskProvider>
//         <h1>Task Manager</h1>
//         <TaskAdder />
//         <TaskList />
//       </TaskProvider>
//     </div>
//   );
// }

// export default App;







// import React, { useReducer, useState } from "react";
// function todoReducer(state, action) {
//   switch (action.type) {
//     case "ADD_TODO":
//       return [...state, { id: Date.now(), text: action.text }];
//     case "REMOVE_TODO":

//       return state.filter((todo) => todo.id !== action.id);
//     default:
//       return state;
//   }
// }

// function TodoList() {
//   const [todos, dispatch] = useReducer(todoReducer, []);
//   const [todoText, setTodoText] = useState("");

//   const handleAddTodo = () => {
//     if (todoText.trim() === "") return;
//     dispatch({ type: "ADD_TODO", text: todoText });
//     setTodoText("");
//   };

//   const handleRemoveTodo = (id) => {
//     dispatch({ type: "REMOVE_TODO", id });
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <input
//         type="text"
//         placeholder="Add a new todo"
//         value={todoText}
//         onChange={(e) => setTodoText(e.target.value)}
//       />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.text}
//             <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <TodoList />
//     </div>
//   );
// }

// export default App;



