const db = require('../db')
const Shops = db.Shops

module.exports = async function (req, res) {
  try {
    await Shops.deleteOne({_id: req.params.id})
    res.status(200).json({ message: 'Successs!' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}