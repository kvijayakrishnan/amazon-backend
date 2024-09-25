const userModel = require('../../model/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv')

dotenv.config();




async function userLoginController(req, res) {
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).send({msg:'Please provide the valid details'})
        }

        const findUser = await userModel.findOne({email});

        if(!findUser){
            return res.status(400).send({msg:"User not exists, Please login"})
        }

        const validPassword = await bcrypt.compare(password, findUser.password)

        if(!validPassword){
            return res.status(400).send({msg:'Invalid User name or password'})
        }

        const tokenData = {
            _id : findUser._id,
            email : findUser.email,
        }
        const token = await jwt.sign(tokenData, process.env.loginToken, {expiresIn : "24h"})

        const tokenOption = {
            httpOnly : true,
            secure : true
        }

        res.cookie("token", token, tokenOption).status(201).send({
            msg : "Login successfully",
            data : token,
            success : true,
            error : false
        })
      
        

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            error : "Internal server error"
        })
    }
    
}


module.exports=userLoginController;





