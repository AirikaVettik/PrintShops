const db = require('../db')
const Shops = db.Shops

module.exports = async function (req, res) {
  try {
    await Shops.updateOne({_id: req.params.id}, {
      $set:{ 
      ...req.body.name && { 'name': req.body.name }, 
      ...req.body.company && { 'contact.company': req.body.company },
      ...req.body.homepage && { 'contact.homepage': req.body.company },
      ...req.body.phone && { 'contact.phone': req.body.phone },
      ...req.body.email && { 'contact.email': req.body.email },
      ...req.body.country && { 'location.country': req.body.country },
      ...req.body.city && { 'location.city': req.body.city },
      ...req.body.address && { 'location.address': req.body.address },
      ...req.body.postcode && { 'location.postcode': req.body.postcode},
      }
    })
    res.status(200).json({ message: 'Successs!' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}