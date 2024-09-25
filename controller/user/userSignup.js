const userModel = require("../../model/userModel");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv")

dotenv.config()



async function userSignUpController(req, res){
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password){
            return res.status(400).send({msg : "Please fill the all details"})
        }

        const existingUser = await userModel.findOne({email : email})

        if(existingUser){
            return res.status(409).send({msg:'User already exists, Please login'})
            console.log(existingUser)
        }
        
        const hashPassword = await bcrypt.hash(password, 5);

        if(!hashPassword){
            res.status(201).send({msg:'Something went wrong'})
        }

        const newUser = {
            ...req.body,
            role : "GENERAL",
            password : hashPassword
        }

        const userData = new userModel(newUser);
        const saveUser = await userData.save();

        res.status(201).send({
            data : saveUser,
            success :true,
            error : false,
            msg : "User is created successfully",
        })
        
        console.log(saveUser)



    } catch (error) {
        res.status(500).send({
            msg: error.msg || "server error",
            error : true,
            success : false
        })
    }
}




module.exports = userSignUpController;



