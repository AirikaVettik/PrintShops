const mongoose = require("mongoose");
const Schema = mongoose.Schema

const schema = new Schema ({
        name: { type: String, required: true },
        contact: [{
            homePage: { type: String, required: true },
            phone: { type: String, required: true },
        }],
        location: [{
            city: { type: String, required: true },
            address: { type: String, required: true },
            postcode: { type: String },
            phone: { type: String, required: true }
        }],
        products: [{
            name: { type: String, required: true },
            paper: { type: String, required: true },
            price: { type: Number, required: true }
        }]
    })

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('shops', schema)