const express = require('express')
const router = express.Router()

const { 
   getShops,
   getShopByID,
   getShopsByCity,
   addShop,
   updateShop,
   addShopProduct,
   updateShopProduct,
   deleteShopProduct,
   deleteShop,

   getProducts,
   addProduct,
   getProductByID,
   updateProduct,
   deleteProduct,


} = require('./controllers')

router.get('/shops', getShops);
router.get('/shops/:id', getShopByID);
router.get('/shops/location/:city', getShopsByCity);

router.post('/shop', addShop);
router.patch('/shop/:id', updateShop);
router.delete('/shop/:id', deleteShop);

router.post('/shop/:id', addShopProduct);
router.patch('/shop/product/:id', updateShopProduct);
router.delete('/shop/product/:id', deleteShopProduct);


router.get('/products', getProducts);
router.post('/product', addProduct);
router.get('/products/:id', getProductByID);
router.patch('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

module.exports = router