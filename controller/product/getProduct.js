
const productModel = require('../../model/productModel');

const getProductController = async(req, res) =>{
    try {
        const allProduct = await productModel.find().sort({createdAt : -1});

        return res.status(201).send({
            msg:"all products",
            error:false,
            success:true,
            data: allProduct
        })
        
    } catch (error) {
        return res .status(400).send({msg:"Internal server error"})
    }
}


module.exports = getProductController;





