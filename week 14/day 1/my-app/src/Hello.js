import React, { useState, useEffect } from "react";

const Hello = (props) => {
    const [username, setUsername] = useState("aaa");
    const [Password, setPassword] = useState("aaa");
    const [users, setUsers] = useState([]);
 console.log(props);
    const { name, email } = props;

    useEffect(() => {
        console.log("username=>", props.name);
        if(username.length> 0) getData();
        if(props.name ==="aaa") getData();
    }, [username, props.name]);
  
  
    
    const getData = async () =>{
    const  res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
    }

   

    const handleClick = (val) => {
        console.log("name=>", name);
        test(name)
    };

    return (
        <>
            <h1>
                Hello {name}, {email},<br /> {username}
            </h1>
            <input onChange={(e) => setUsername (e.target.value)} />
            <button onClick={() => handleClick(name)}>Submit</button>
            {users.map((item) =>{
                return <div>{item.name}</div>;
            })}
        </>
    );
};

export default Hello;


// import React, { useState, useEffect } from "react";

// const Hello = (props) => {
//     const [username, setUsername] = useState("aaa");
//     const [Password, setPassword] = useState("aaa");

//     const { name, email } = props;

//     useEffect(() => {
//         console.log("useEffect");
//     }, [Password, username]);

//     const handleChange = (e) => {
//         setUsername(e.target.value);
//     };

//     const handleClick = (val) => {
//         console.log("name =>", name);
//     };

//     return (
//         <>
//             <h1>
//                 Hello {name}.{email},<br /> {username}
//             </h1>
//             <input onChange={handleChange} value={username} />
//             <button onClick={() => handleClick(name)}>Submit</button>
//         </>
//     );
// };

// export default Hello;




// const Hello = ({name, email}) =>{
//     //const {name, email} = props;
//     return(
//         <h1>
//             Hello {name},{email}
//         </h1>
//     );
// };
// export default Hello


