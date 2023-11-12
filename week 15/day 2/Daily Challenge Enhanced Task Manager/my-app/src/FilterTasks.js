import React from 'react';
import { useTaskContext } from './TaskContext';

const FilterTasks = () => {
  const { state, dispatch } = useTaskContext();

  const handleFilter = (filter) => {
    dispatch({ type: 'FILTER_TASKS', payload: filter });
  };

  return (
    <div>
      <button onClick={() => handleFilter('all')}>All</button>
      <button onClick={() => handleFilter('completed')}>Completed</button>
      <button onClick={() => handleFilter('active')}>Active</button>
    </div>
  );
};

export default FilterTasks;
