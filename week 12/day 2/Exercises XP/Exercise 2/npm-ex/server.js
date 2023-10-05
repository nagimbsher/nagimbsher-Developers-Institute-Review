const express = require('express')
const app = express()
const todos_routes = require('./routes/Toodos.js')

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})

app.use(express.json())
app.use('/api/todes', todos_routes)








// const express = require('express');
// const bodyParser = require('body-parser');
// const port = 9000;
// const app = express();

// var todos = [{id:1, title:'buy the milk'}, {id:2, title:'rent a car'}, {id:3, title:'feed the cat'}];

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

// app.get('/', (request, response) => response.status(200).json(todos));

// // app.post('/', (request, response) => {
// //   var newTodo = request.???TODO???
// //   newTodo.id = todos.length +1;
// //   todos.push(newTodo);
// //   response.status(201).json(newTodo);
// // });

// app.listen(port);