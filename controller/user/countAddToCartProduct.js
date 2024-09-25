const addToCartModel = require("../../model/cartProduct");

const countAddToCartProduct = async(req, res)=>{
    try {
        
        const userId = req.userId;

        const count = await addToCartModel.countDocument({
            userId:userId
        })

        return res.status(200).send({
            msg:'ok',
            error:false,
            success:true,
            data:{
                count: count
            }
        })


    } catch (error) {
        return res.status(500).send({
            msg:'Internal server error',
            error:true,
            success:false
        })
    }
}



module.exports = countAddToCartProduct;



