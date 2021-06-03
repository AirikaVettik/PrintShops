const db = require('../db')
const Products = db.Products

module.exports = async function (req, res) {
  try {
    const Product = await Products.findOne({_id: req.params.id})
    res.status(200).json({ Product })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}