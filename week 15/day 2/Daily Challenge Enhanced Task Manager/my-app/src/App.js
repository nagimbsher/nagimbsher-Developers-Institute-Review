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




