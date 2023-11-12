import React from 'react'; // Make sure to import React
import AddOne from './AddOne';

const Action = ({ count, setCount }) => {
  return (
    <AddOne count={count} setCount={setCount} />
  );
}

export default Action;
