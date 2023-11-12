import React, { createContext, useReducer, useContext } from 'react';

const TaskContext = createContext();

const initialState = {
  tasks: [], // Store tasks as an array of objects
  filter: 'all', // Default filter: 'all', other options: 'completed', 'active'
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask = {
        id: Date.now(), 
        text: action.payload,
        completed: false, 
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text }
            : task
        ),
      };
    case 'FILTER_TASKS':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

export { TaskProvider, useTaskContext };





