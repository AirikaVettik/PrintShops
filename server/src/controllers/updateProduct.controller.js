const db = require('../db')
const Products = db.Products

module.exports = async function (req, res) {
  try {
    await Products.updateOne({_id: req.params.id}, {
        $set: {
            ...req.body.name && { 'name': req.body.name }, 
            ...req.body.size && { 'size': req.body.size },
            ...req.body.paper && { 'paper': req.body.paper },
            ...req.body.price && { 'price': req.body.price },
    }})
    res.status(200).json({ message: 'Successs!' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}