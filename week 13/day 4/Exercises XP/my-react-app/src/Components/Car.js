import React, { useState } from 'react';

const Car = () => {
  const carInfo = { name: "Ford", model: "Mustang" };
  const [color, setColor] = useState("red");

  return (
    <div>
      <h2>This car is {color} {carInfo.model}</h2>
    </div>
  );
};

export default Car;



// import React from 'react';

// const Car = () => {
//   const carInfo = { name: "Ford", model: "Mustang" };

//   return (
//     <div>
//       <h2>This car is {carInfo.model}</h2>
//     </div>
//   );
// };

// export default Car;
