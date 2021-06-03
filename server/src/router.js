const express = require('express')
const router = express.Router()

const { 
   getShops,
   addShop,
   getProducts,
   addProduct,

} = require('./controllers')

router.get('/shops', getShops);
router.post('/shop', addShop);
router.get('/products', getProducts);
router.post('/product', addProduct);

module.exports = router