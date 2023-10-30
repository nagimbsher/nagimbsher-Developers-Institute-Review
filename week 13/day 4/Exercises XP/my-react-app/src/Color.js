import React, { useState} from 'react';
import "./Color.css"
const Color = () => {
    
  const [favoriteColor, setFavoriteColor] = useState("Red");

  const changeColor = () => {
    setFavoriteColor("Blue");
  };

  return (
    <div>
      <h2>My Favorite Color is {favoriteColor}</h2>
      <button onClick={changeColor}>Change Color to Blue</button>
    </div>
  );
};

export default Color;






// import React, { useState, useEffect } from 'react';
// const Color = () => {
//   const [favoriteColor, setFavoriteColor] = useState("red");
//   const changeColor = () => {
//     setFavoriteColor("blue");
//   };

//   return (
//     <div>
//       <h2>My FavoriteColors are Red and Blue</h2>
//       <h2>{favoriteColor}</h2>
//       <button onClick={changeColor}>Change Color to Blue</button>
//     </div>
//   );
// };

// export default Color;
