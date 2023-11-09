import React from "react";

const PostList = ({ data }) => {
  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;






// import React, { useState, useEffect } from 'react';

// function PostList() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetch the JSON data from the file (assuming it's in the public folder)
//     fetch('/data.json')
//       .then((response) => response.json())
//       .then((data) => setPosts(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       {posts.map((post) => (
//         <div key={post.id} className="post">
//           <h2>{post.title}</h2>
//           <p>{post.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default PostList;
