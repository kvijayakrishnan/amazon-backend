const productModel = require("../../model/productModel");


const searchProduct = async(req, res) =>{
    try {
        const query = req.query.q;

        const regex = new RegExp(query,'i','g')

        const product = await productModel.find({
            "$or" :[
                {
                    productName:regex
                },
                {
                    category:regex
                }
            ]
        })

        return res.status(200).send({
            data:product,
            msg:"Search product list",
            error:false,
            success:true,
        })
        
    } catch (error) {
        return res.status(500).send({msg:'Internal server error'});
    }
}


module.exports = searchProduct