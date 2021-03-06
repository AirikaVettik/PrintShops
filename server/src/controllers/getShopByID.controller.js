const db = require('../db')
const Shops = db.Shops

module.exports = async function (req, res) {
  try {
    const Shop = await Shops.findOne({_id: req.params.id})
    res.status(200).json({ Shop })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}