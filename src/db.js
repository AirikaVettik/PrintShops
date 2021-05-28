const { mongoose } = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

module.exports = {
    Shops: require("./models/shops.model"),
    Products: require("./models/products.model"),
}