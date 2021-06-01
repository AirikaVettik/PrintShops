const express = require ('express');
const mongodb = require('mongodb');

const router = express.Router();

//GET
router.get('/', async (req,res) => {
    const shops = await loadShops();
    res.send(await shops.find({}).toArray())
})


//ADD



//DELETE


async function loadShops() {
    const client = await mongodb.MongoClient.connect 
    ('mongodb+srv://Airika:asd123@printshops.7ygxq.mongodb.net/printShops', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    return client.db('printShops').collection('shops')
}


module.exports = router