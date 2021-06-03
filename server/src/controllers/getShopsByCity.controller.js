
const db = require('../db') 
const Shops = db.Shops

module.exports = async function (req, res) { 
  try {

    const getShopsByLocation = await Shops.find ({ 
      "location.city" : req.params.city
    })
    res.status(200).json({ getShopsByLocation })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}
