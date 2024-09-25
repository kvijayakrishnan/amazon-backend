const uploadProduct = require("../../helper/permission")

const productModel = require("../../model/productModel")


async function updateProductController(req, res) {

    try {

        if(!uploadProduct){
            return res.status(404).send({msg:"Permission exit"});
        }

        const {_id, ...resBody} = req.body;

        const updateProduct = await productModel.findByIdAndUpdate(_id, resBody)

        res.status(200).send({
            msg:"Product updated successfully",
            data:updateProduct,
            error:false,
            success:true,
        })

        
    } catch (error) {
        return res.status(500).send({msg:"internal server error"})
    }
    
}

module.exports =updateProductController;




















