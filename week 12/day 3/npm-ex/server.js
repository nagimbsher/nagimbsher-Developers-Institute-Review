const express = require('express')
const app = express()
const products_routes = require('./Routes/Products.Js')

app.listen(5000, () => {
    console.log('server is listening on port 5000')
})

app.use(express.json())
app.use('/api/products', products_routes)






// const products = [
//     { id: 1, name: "iPhone", price: 800 },
//     { id: 2, name: "iPad", price: 650 },
//     { id: 3, name: "iWatch", price: 750 },
//   ];
  
//   module.exports = products;













