
import React, { useRef, useState } from 'react';
import { useTaskContext } from './TaskContext';

const EditTask = ({ task }) => {
  const { dispatch } = useTaskContext();
  const [isEditing, setIsEditing] = useState(false);
  const editedTaskTextRef = useRef(task.text);

  const handleEdit = () => {
    if (isEditing) {
      dispatch({ type: 'EDIT_TASK', payload: { id: task.id, text: editedTaskTextRef.current } });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          defaultValue={task.text}
          ref={editedTaskTextRef}
        />
      ) : (
        <span>{task.text}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </div>
  );
};

export default EditTask;
