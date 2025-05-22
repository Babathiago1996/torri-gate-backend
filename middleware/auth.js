const jwt=require("jsonwebtoken")
const { recompileSchema } = require("../models/user")
//islogged checkauth "bearer token"
const isLoggedIn=async(req, res, next)=>{
const authHeader=req.headers.authorization
if(!authHeader || !authHeader.startsWith("Bearer")){
    return res.status(401).json({message:"unauthorized, invalid token"})
}
const token=authHeader.split(" ")[1]
try {
    const payload=jwt.verify(token, process.env.JWT_SECRET)
    if(!payload){
        return res.status(401).json({message:"unAthouraized to the perform action"})
    }
    req.user={
        email:payload.email,
        role:payload.role,
        userId:payload.userId
    }
    next()
} catch (error) {
    console.error(error)
    res.status(500).json({message:"Authentification failed"})
}
}
//have the required permission to perfirm the action
const requiredPermissions=(...roles)=>{
    return (req, res, next)=>{
        if(!roles.includes(req.user.role)){
            return res.status(403).json({message:"Unathorized to access this route"})
        }
        next();
    }
}
module.exports={isLoggedIn,requiredPermissions}