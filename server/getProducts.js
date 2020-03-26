const products = require('../products.json');



const getProducts = (req, res) => {
  if(req.query.price){
   let item = products.filter(val => val.id === +req.query.price)   
   return res.status(500).send(item)
  }
   res.status(200).send(products)
}

module.exports = getProducts;