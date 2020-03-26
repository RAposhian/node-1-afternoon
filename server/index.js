const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProducts');

const app = express();

app.use(express.json());

const port = 8080;

app.get('/api/products', getProducts)
app.get(`/api/product/:id`, getProduct)

app.listen(port, ()=> console.log(`Server is running on port: ${port}`))