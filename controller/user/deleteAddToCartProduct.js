const addToCartModel = require("../../model/cartProduct");


const deleteAddToCartProduct = async (req, res)=>{
    try {

        const currentUserId = req.userId;
        const addToCartProductId = req.body._id;

        const deleteProduct= await addToCartModel.deleteOne({_id:addToCartProductId})

        return res.status(200).send({
            msg:'Product Deleted successfully',
            success:true,
            error:false,
            data:deleteProduct
        })



        
    } catch (error) {
        return res.status(500).send({
            msg:'Internal server error',
            error:true,
            success:false
        })
    }
}


module.exports = deleteAddToCartProduct;




