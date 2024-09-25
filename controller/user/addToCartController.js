const addToCartModel = require("../../model/cartProduct");

const addToCartController = async(req, res) =>{
    try {

        const {productId} = req?.body;
        const currentUser = req.userId;

        const isProductAvailable = await addToCartModel.findOne({productId})

        console.log('is Product Available :', isProductAvailable)

        if(isProductAvailable){
            return res.status(201).send({
                msg:"Already exist in add to cart",
                success:false,
                error:true,
            })
        }

        const payload = {
            productId:productId,
            quantity:1,
            userId:currentUser,
        }

        const newAddToCart = new addToCartModel(payload)
        const saveProduct = await newAddToCart.save();

        return res.status(200).send({
            data:saveProduct,
            msg:"Product is added successfully",
            success:true,
            error:false
        })

        
    } catch (error) {
        return res.status(500).send({msg:'Internal server error'})
    }
}


module.exports = addToCartController









