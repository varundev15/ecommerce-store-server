const products = require("../models/products")

module.exports.getproducts = async (req, res, next) => {
    try {
        let data = await products.find({});
        return res.json({
            status: true,
            data: data
        })
    }
    catch (er) {
        return res.json({
            status: false,
            error: er
        })
    }
}