const express = require('express')
const router = express.Router()

const { 
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct 
} = require('../Controllers/Products.Js')

router.get('/', getProducts)
router.get('/:productID', getProduct)
router.post('/', createProduct) 
router.put('/:productID', updateProduct) 
router.delete('/:productID', deleteProduct)

module.exports = router