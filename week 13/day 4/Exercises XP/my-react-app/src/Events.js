// import React from 'react';

// const Events = () => {
//   const clickMe = () => {
//     alert('I was clicked');
//   };

//   return (
//     <div>
//       <button onClick={clickMe}>Click Me</button>
//     </div>
//   );
// };

// export default Events;




// import React from 'react';

// const Events = () => {
//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       alert('Enter key pressed: ' + event.target.value);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Press Enter..."
//         onKeyDown={handleKeyDown}
//       />
//     </div>
//   );
// };

// export default Events;


import React, { useState } from 'react';

const Events = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggleState = () => {
    setIsToggleOn((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={toggleState}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default Events;
