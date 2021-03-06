const mongoose = require("mongoose");
const Schema = mongoose.Schema

const schema = new Schema ({    
    name: { type: String, required: true },
    size: { type: String, required: true },
    paper: { type: String, required: true },
    price: { type: Number, required: true }
    })

schema.set('toJSON', { virtuals: true })

module.exports = mongoose.model('product', schema )