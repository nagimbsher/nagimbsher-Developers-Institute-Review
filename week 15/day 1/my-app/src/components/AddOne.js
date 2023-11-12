import React, { useState } from 'react'; 

const AddOne = ({ count, setCount }) => {
  const IncrementOne = () => {
    
    setCount(count + 1);
  };

  return (
    <button onClick={IncrementOne}>Click</button>
  );
};

export default AddOne;
