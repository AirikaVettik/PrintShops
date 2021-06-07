module.exports = {
    getShops: require('./getShops.controller'),
    getShopByID: require('./getShopByID.controller'),
    getShopsByCity: require('./getShopsByCity.controller'),

    addShop: require('./addShop.controller'),
    updateShop: require('./updateShop.controller'),
    addShopProduct: require('./addShopProduct.contoller'),
    updateShopProduct: require('./updateShopProduct.controller'),
    deleteShopProduct: require('./deleteShopProduct.controller'),
    deleteShop: require('./deleteShop.controller'),


    getProducts: require('./getProducts.controller'),
    getProductByID: require('./getProductByID.controller'),

    addProduct: require('./addProduct.controller'),
    updateProduct: require('./updateProduct.controller'),
    deleteProduct: require('./deleteProduct.controller'),
    
    
    
}