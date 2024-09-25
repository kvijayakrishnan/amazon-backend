const userModel = require("../../model/userModel");

async function allUsers(req, res) {
    try {
        const allUsers = await userModel.find();

        return res.status(201).send({
            msg:"all user",
            success:true,
            error:false,
            data:allUsers
        })

        
    } catch (error) {
        return res.status(500).send({
            msg:"Internal server error",
            error:true,
            success: false
        })
    }
}



module.exports = allUsers;









