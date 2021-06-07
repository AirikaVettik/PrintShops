const db = require('../db')
const Shops = db.Shops

module.exports = async function addShopProduct(req, res) {
    try {
        const productId = req.params.id  
        await Shops.updateOne(
            { 'products._id': productId },
            {
                $pull: {
                    products: { _id: productId }
                }
            }),
        res.status(200).json({ message: 'Successs!' })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}