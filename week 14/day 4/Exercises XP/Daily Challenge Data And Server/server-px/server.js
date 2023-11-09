
// //Part II
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); 

app.get("/api/hello", (req, res) => res.send("Hello from Express"));
app.post("/api/world", (req, res) => {
  res.send({
    message: `I received your post request. This is what you sent me: ${JSON.stringify(req.body)}`
  });
});

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});







// const express = require ("express");
// const cors = require("cors");
// const app = express();
//  const PORT = 3001;
//  app.use(cors());

//  app. get("/api/hello",(req,res) => res.send("Hello from Express"));
//  app.post("/api/world", (req,res) =>{
//  res.send ({
//    message:`I recevied your post request.this is what you sent me:${JSON.stringify(req.body)}`

//  });
// });

//  app.listen(PORT,() =>{
//     console.log("listening on port", PORT);
//  });






 //Part I
//You will send data to an Express server with React and display it.

// const express = require ("express");
// const cors = require("cors");
// const app = express();
//  const PORT = 3001;
//  app.use(cors());

//  app. get("/api/hello",(req,res) => res.send("Hello from Express"));

//  app.listen(PORT,() =>{
//     console.log("listening on port", PORT);
//  });





