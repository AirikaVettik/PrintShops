const db = require('../db')
const Shop = db.Shop

module.exports = async function (req, res) {
    try {
      const result = [
        await Shop.find({}).lean().exec()
      ]
      res.status(200).json(result)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }