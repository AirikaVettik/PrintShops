const db = require('../db')
const Shops = db.Shops

module.exports = async function (req, res) {
    try {
      const result = await Shops.find({}).lean().exec()
      res.status(200).json(result)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }