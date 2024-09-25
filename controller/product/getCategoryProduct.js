
const productModel = require("../../model/productModel");

const getCategoryProduct = async (req, res) =>{
    try {
        const productCategory = await productModel.distinct("category");

        console.log('category', productCategory);

        const productByCategory = [];

        for(const category of productCategory){
            const product = await productModel.findOne({category})

            if(product){
                productByCategory.push(product)
            }
        }

        return res.status(201).send({
            msg:"product category",
            data:productByCategory,
            success:true,
            error:false
        })
        
    } catch (error) {
        return res.status(500).send({msg:"Internal server error"})
    }
}

module.exports = getCategoryProduct




