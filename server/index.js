const express = require('express')
const getProducts = require('./getProducts')
const getProductId = require('./getProducts')

let app = express()

app.use(express.json())

app.get('/api/products', getProducts)

app.get(`/api/product/:id`, getProductId)

app.listen(8080, ()=> console.log(8080 + 'server is running'))