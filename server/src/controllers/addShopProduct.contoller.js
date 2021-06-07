const db = require('../db')
const Shops = db.Shops

module.exports = async function addShopProduct(req, res) {
    try {
        await Shops.updateOne({_id: req.params.id}, 
            {
            $push: {
                products: {
                ...req.body.name && { 'name': req.body.name }, 
                ...req.body.size && { 'size': req.body.size },
                ...req.body.paper && { 'paper': req.body.paper },
                ...req.body.price && { 'price': req.body.price },
            }}
        }),
        res.status(200).json({ message: 'Successs!' })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}