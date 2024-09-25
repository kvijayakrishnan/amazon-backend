
const uploadProductPermission = require('../../helper/permission');
const productModel = require('../../model/productModel');


async function UploadProductController(req, res) {
    try {
        
        const sessionUserId = req.userId;

        if(!uploadProductPermission(sessionUserId)){
            return res.status(400).send({msg:"permission denied"})
        }

        const uploadProduct = new productModel(req.body);
        const saveProduct = await uploadProduct.save();

        return res.status(200).send({msg:"Product upload successfully"})


    } catch (error) {
        res.status(500).send({msg:"Internal server error"});
        console.log(error)
    }
}


module.exports = UploadProductController





















