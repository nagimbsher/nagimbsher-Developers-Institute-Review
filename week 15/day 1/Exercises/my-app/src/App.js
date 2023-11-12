// Exercise 3: Optimize Component Rendering
// Develop a component that fetches data from an API and displays it. Use useRef to cache the fetched data so that it is only retrieved again when the component is remounted.

// function DataFetcher() {
//   // Your code here
// }



import React, { useEffect, useState, useRef } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const isMounted = useRef(true); // A ref to track if the component is mounted

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('YOUR_API_ENDPOINT');
        const result = await response.json();

        // Check if the component is still mounted before updating state
        if (isMounted.current) {
          setData(result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <div>
      {data ? (
        <div>
          {/* Display the fetched data */}
          <h2>Fetched Data</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default DataFetcher;









// Exercise 2: Create A Smooth Scrolling Component
// Build a component that scrolls smoothly to a specific section of a page when a button is clicked. Use useRef to maintain references to the target elements and perform the smooth scrolling.

// function SmoothScroll() {
//   // Your code here
// }



// import React, { useRef } from 'react';

// function SmoothScroll() {
//   const targetRef = useRef(null);

//   const scrollToTarget = () => {
//     if (targetRef.current) {
//       targetRef.current.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start', //change this to 'end' or 'center' as per your preference
//       });
//     }
//   };

//   return (
//     <div>
//       <button onClick={scrollToTarget}>Scroll to Target</button>
//       <div style={{ height: '1000px' }}>Some content above</div>
//       <div ref={targetRef}>Target Section</div>
//       <div style={{ height: '1000px' }}>Some content below</div>
//     </div>
//   );
// }

// export default SmoothScroll;





// Create a component that allows users to input text into a text area. Display a character count below the text area, and use useRef to keep track of the input value without re-rendering the component on every keystroke.

// function CharacterCounter() {
//   // Your code here
// }





// import React, { useRef, useState } from 'react';

// function CharacterCounter() {
  
//   const textAreaRef = useRef(null);

  
//   const [charCount, setCharCount] = useState(0);

  
//   const updateCharCount = () => {
    
//     const count = textAreaRef.current.value.length;
//     setCharCount(count);
//   };

//   return (
//     <div>
//       <textarea
//         ref={textAreaRef}
//         onChange={updateCharCount}
//         placeholder="Type something..."
//       ></textarea>
//       <div>Character Count: {charCount}</div>
//     </div>
//   );
// }

// export default CharacterCounter;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
