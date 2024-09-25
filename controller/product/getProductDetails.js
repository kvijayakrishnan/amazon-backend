const productModel = require("../../model/productModel");



const getProductDetails = async(req, res) =>{
    try {
        
        const {productId} = req.body;
        const product = await productModel.findById(productId);

        return res.status(201).send({msg: "product ok", product})


    } catch (error) {
        return res.status(500).send({msg:"Internal server error"})
    }
}




module.exports = getProductDetails;

