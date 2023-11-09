const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});




app.use(express.json());

app.post('/api/world', (req, res) => {
  const value = req.body.value;
  const response = `I received your POST request. This is what you sent me: ${value}`;
  res.send(response);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
