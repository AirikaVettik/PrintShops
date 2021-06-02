const mongoose = require("mongoose");
const Schema = mongoose.Schema

const schema = new Schema ({
        name: { type: String, required: true },
        contact: {
            homepage: { type: String},
            phone: { type: String, required: true },
            email: { type: String, required: true },
        },
        location: {
            city: { type: String, required: true },
            address: { type: String, required: true },
            postcode: { type: String },
        },
        products: [{
            name: { type: String },
            paper: { type: String },
            price: { type: Number }
        }],
        createdDate: { type: Date, default: Date.now }
    })

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('shop', schema )