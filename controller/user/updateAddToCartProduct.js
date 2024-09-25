const addToCartModel = require("../../model/cartProduct");


const updateAddToCartProduct = async(req, res) =>{
    try {

        const currentUser = req.userId;
        const addToCartProductId = req?.body?._id;

        const qty = req.body.quantity;

        const updateProduct = await addToCartModel.updateOne({_id:addToCartProductId},{
            ...(qty && {quantity :qty})
        })

        return res.status(200).send({
            msg:'Product updated',
            data:updateProduct,
            error:false,
            success:true,
        })


        
    } catch (error) {
        return res.status(500).send({
            error:true,
            success:false,
            msg:'Internal server error'
        })
    }
}





module.exports = updateAddToCartProduct;









