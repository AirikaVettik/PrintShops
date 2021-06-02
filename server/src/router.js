const express = require('express')
const router = express.Router()

const { 
   getShops,

} = require('./controllers')

router.get('/shops', getShops)

module.exports = router