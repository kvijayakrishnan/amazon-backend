const addToCartModel = require("../../model/cartProduct");

const addToCartViewProduct = async(req, res) =>{
    try {
        
        const currentUser = req.userId;
        const allProduct = await addToCartModel.find({
            userId:currentUser
        }).populate('productId')

        return res.status(200).send({
            success:true,
            error:false,
            data:allProduct
        })


    } catch (error) {
        return res.status(500).send({
            msg:"Internal server error",
            error:true,
            success:false
        })
    }
}



module.exports = addToCartViewProduct




