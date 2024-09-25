

const jwt = require('jsonwebtoken');

async function authToken(req, res, next){
    try {

        const token = req.cookies?.token;

        if(!token){
            return res.status(201).send({
                msg:"please login",
                success:false,
                error:true
            })
        }

        jwt.verify(token, process.env.loginToken, function(err, decodedToken){
            if(err){
                console.log(err)
                res.status(400).send({
                    msg:"Token not valid please login",
                    err:true,
                    success:false
                })
            }

            req.userId = decodedToken?._id
            next()
        })

        
    } catch (error) {
        res.status(500).send({
            msg:"Internal server error",
            error: true,
            success:false
        })
    }
}




module.exports = authToken;







