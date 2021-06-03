const db = require('../db')
const Products = db.Products

module.exports = async function (req, res) {
    try {
      const result = [
        await Products.find({}).lean().exec()
      ]
      res.status(200).json(result)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }