const productModel = require("../../model/productModel");


const filterProductController = async(req, res) =>{
    try {
        
        const categoryList = req?.body?.category || [];

        const product = await productModel.find({
            "$in":categoryList
        })

        return res.status(200).send({
            data:product,
            msg:"product",
            error:false,
            success:true,
        })


    } catch (error) {
        return res.status(500).send({msg:"Internal server error"})
    }
}


module.exports = filterProductController;












