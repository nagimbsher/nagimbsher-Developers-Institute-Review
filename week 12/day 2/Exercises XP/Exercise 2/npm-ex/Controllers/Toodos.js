const todos = require('../data.js')

const todoss = (req, res) => {
    res.json(todoss)
}

const getTodos= (req, res) => {
    const id = Number(req.params.todosID)
    const todos = todos.find(todos => todos.id === id)

    if (!todos) {
        return res.status(404).send('Todo not found')
    }
    res.json(todos)
}

const createTodos = (req, res) => {
    const newTodes = {
        id: todos.length + 1,
        name: req.body.name
        
    }
    todospush(newTodes)
    res.status(201).json(newTodes)
}

const updateTodos= (req, res) => {
    const id = Number(req.params.todosID)
    const index = todos.findIndex(todos => todos.id === id)
    const updateTodos = {
        id: todos[index].id,
        name: req.body.name
        
    }

    todos[index] = updateTodos
    res.status(200).json('Todes updated')
}

const deleteTodos= (req, res) => {
    const id = Number(req.params.todosID)
    const index = todos.findIndex(todos => todos.id === id)
    todos.splice(index, 1)
    res.status(200).json('Todos deleted')
}

module.exports = {
    getTodos,
    getTodos,
    createTodos,
    updateTodos,
    deleteTodos
}