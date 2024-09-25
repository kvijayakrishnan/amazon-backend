const userModel = require('../../model/userModel')

async function userDetailsController(req, res) {
    try {

        console.log('userId', req.userId)
        const user = await userModel.findById(req.userId);

        res.status(201).send({
            data:user,
            error:false,
            success:true,
            msg:"user details"
        })

        console.log('user', user)

        
    } catch (error) {
        res.status(500).send({
            msg:"Internal server error",
            error: true,
            success:false
        })
    }
    
}



module.exports = userDetailsController

















