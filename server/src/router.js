const express = require('express')
const router = express.Router()

const { 
   getShops,
   addShop,
   getShopByID,
   getProducts,
   addProduct,
   getProductByID,

} = require('./controllers')

router.get('/shops', getShops);
router.post('/shop', addShop);
router.get('/shops/:id', getShopByID);

router.get('/products', getProducts);
router.post('/product', addProduct);
router.get('/products/:id', getProductByID);

module.exports = router