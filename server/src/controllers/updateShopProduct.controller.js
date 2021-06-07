const db = require('../db')
const Shops = db.Shops

module.exports = async function updateShopProduct(req, res) {
    try {
        const productId = req.params.id  
        await Shops.updateOne(
            { 'products._id': productId },
            {
                $set: {
                    ...req.body.name && { 'products.$.name': req.body.name }, 
                    ...req.body.size && { 'products.$.size': req.body.size },
                    ...req.body.paper && { 'products.$.paper': req.body.paper },
                    ...req.body.price && { 'products.$.price': req.body.price },
                }
            }
        );
        res.status(200).json({ message: 'Successs!' })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

