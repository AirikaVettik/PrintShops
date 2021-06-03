module.exports = {
    getShops: require('./getShops.controller'),
    getShopByID: require('./getShopByID.controller'),
    getShopsByCity: require('./getShopsByCity.controller'),

    getProducts: require('./getProducts.controller'),
    getProductByID: require('./getProductByID.controller'),

    addShop: require('./addShop.controller'),
    addProduct: require('./addProduct.controller'),
    
    updateShop: require('./updateShop.controller'),
    deleteShop: require('./deleteShop.controller'),
}