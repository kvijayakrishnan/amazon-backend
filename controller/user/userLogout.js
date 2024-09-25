// const express = require("express")
async function userLogoutController(req, res) {
     try {
        await res.clearCookie('accesstoken')
        res.status(500).send({msg:'Logout successfully'})
    } catch (error) {
        res.status(500).send({msg:'Internal server error'})
    }
}


module.exports = userLogoutController