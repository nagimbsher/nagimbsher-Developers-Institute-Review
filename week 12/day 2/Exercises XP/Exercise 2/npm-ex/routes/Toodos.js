const express = require('express')
const router = express.Router()

const { 
    
    getTodoss,
    getTodos,
    createTodos,
    updateTodos,
    deleteTodos 
} = require('../Controllers/Toodos.js')

router.get('/', getTodos)
router.get('/:todesID', getTodos)
router.post('/', createTodos) 
router.put('/:todosID', updateTodos) 
router.delete('/:todosID', deleteTodos)

module.exports = router