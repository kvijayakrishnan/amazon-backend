
const productModel = require("../../model/productModel");

const getCategoryWiseProduct = async(req, res)=>{

    try {
        const {category} = req?.body || req?.query;
        const product = await productModel.find({category});

        return res.status(201).send({msg:'Product', product})

    } catch (error) {
        return res.status(500).send({msg:"Internal server error"})
    }
}

module.exports = getCategoryWiseProduct



