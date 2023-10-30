import React, { useState } from 'react';

const Phone = () => {
  const [state, setState] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
  });

  const changeColor = () => {
    setState((prevState) => ({
      ...prevState,
      color: "blue",
    }));
  };

  return (
    <div>
      <h2>My Phone is Samsung </h2>
      <p>Brand: {state.brand}</p>
      <p>Model: {state.model}</p>
      <p>Color: {state.color}</p>
      <p>Year: {state.year}</p>
      <button onClick={changeColor}>Change Color to Blue</button>
    </div>
  );
};

export default Phone;






// import React, { useState } from 'react';
// const Phone = () => {
//   const [state, setState] = useState({
//     brand: "Samsung",
//     model: "Galaxy S20",
//     color: "black",
//     year: 2020,
//   });

//   return (
//     <div>
//       <h2>Phone Details</h2>
//       <p>Brand: {state.brand}</p>
//       <p>Model: {state.model}</p>
//       <p>Color: {state.color}</p>
//       <p>Year: {state.year}</p>
//     </div>
//   );
// };

// export default Phone;
