

import React, { useState } from "react";

function App() {
  const webhookURL = "https://webhook.site/6363ca56-e26e-4231-a70d-6e7f54ccc81b"; 
  const [response, setResponse] = useState(null);

  const postData = async () => {
    const data = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27,
    };

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Response from webhook:", responseData);
        setResponse(responseData); // Set the response in the state
      } else {
        console.error("Failed to send data to the webhook.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="App">
      <button onClick={postData}>Send POST Request</button>
      <div>
        <h2>Response from Webhook:</h2>
        <pre>{JSON.stringify(response, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;




  







// import React from "react";
// import Example1 from "./Example1";
// import Example2 from "./Example2";
// import Example3 from "./Example3";
// import data2 from "./data2.json";

// function App() {
//   return (
//     <div className="App">
//       <Example1 socialMedias={data2.SocialMedias} />
//       <Example2 skills={data2.Skills} />
//       <Example3 experiences={data2.Experiences} />
//     </div>
//   );
// }

// export default App;










// import React from "react";
// import PostList from "./PostList"; 
// import data from "./data.json"; 

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi this is a Title</h1>
//       <PostList data={data} />
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ErrorBoundary from './ErrorBoundary'; 
// import HomeScreen from './HomeScreen';
// import ProfileScreen from './ProfileScreen';
// import ShopScreen from './ShopScreen';

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/" exact>
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/profile">
//                 Profile
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/shop">
//                 Shop
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
//           <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
//           <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;






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

// export default App;
