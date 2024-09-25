
const userModel = require('../../model/userModel');

async function updateUser(req, res) {
    const sessionUser = req.userId;

    try {

        const {userId, name, email, role} =req.body;

        const payload = {
            ...(email && {email : email}),
            ...(name && {name : name}),
            ...(role && {role : role}),
        }

        const user = await userModel.findById(sessionUser)

        if(!user){
            return res.status(440).send({
                msg:"Authendicate user not found",
                error:true,
                success:false,
            })
        }

        console.log('user role', user.role);

        const userFindById = await userModel.findById(userId);

        if(!userFindById){
            return res.status(404).send({
                msg: "user id not found",
                error:true,
                success:false,
            })
        }

        if(user.role !== "ADMIN" && sessionUser !== userId){
            return res.status(403).send({
                msg:"You don't have permission to update the user",
                error:true,
                success:false,
            })
        }

        const updateUser = await userModel.findByIdAndUpdate(userId, payload, {new :true});

        res.status(201).send({
            data :updateUser,
            msg:'user update successfully',
            success:true,
            error:false,
        })

        
    } catch (error) {
        return res.status(500).send({
            msg:"Internal server error",
            error:true,
            success:false
        })
    }
    
}


module.exports = updateUser;










