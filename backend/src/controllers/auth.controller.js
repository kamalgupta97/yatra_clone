const jwt = require('jsonwebtoken')
require('dotenv').config()

const User = require('../models/user.model')

const newToken = (user) => {
    return jwt.sign({id: user.id}, process.env.JWT_SECRET_KEY);
}

const signup = async (req, res) => {
    try {
        const user = await User.create(req.body)
        let token = newToken(user)
        return res.status(201).json({data: {token}})
    }
    catch (err) {
        return res 
            .status(500)
            .json({status: "failed", meaasage: "something went wrong"})
    }
}

const signin = async (req, res) => {
    let user;
    try{
        user = await User.findOne({email: req.body.email}).exec()
        if(!user) 
            return res
                .status(401)
                .json({
                    status: "failed",
                    message: "Your email is not correct",
                })
    } catch (e) {
        return res
            .status(500)
            .json({
                status: "failed",
                message: "Something went wrong here in email"
            })
    }

    try {
        const match = await user.checkPassword(req.body.password)
        if(!match) return res
            .status(401)
            .json({
                status: "failed",
                message: "Your password is not correct",
            })
    } catch (e) {
        return res
            .status(500)
            .json({
                status: "failed",
                message: "Something went wrong in password"
            })
    }

    const token  = newToken(user);

    return res.status(201).json({data: {token}});
}


// get users
//.select("-password")
const user = async (req, res) => {
    const users = await User.find().lean().exec();
    console.log(users)
    return res.status(200).json({data: users})
}

module.exports = {
    signup,
    signin,
    user,
    newToken
}