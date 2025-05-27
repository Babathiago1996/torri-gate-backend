const PROPERTY =require("../models/property")

const createProperty= async (req, res)=>{
    res.send("create property")
}
const getLandlordsProperty=async (req, res)=>{
    res.send("get landlords property")
}
const updatePropertyAvailability=async (req, res)=>{
    res.send("update availability")
}
const getAllProperty=async (req, res)=>{
    const {page=1, location}=req.query
    const limit=12
    const skip=(page-1)*limit
    try {
const filter = {
  availability:"available"
};
if(location){
    filter.location={$regex:location, $options:"i"}
}
     const properties=await  PROPERTY.find(filter).sort("-createdAt").skip(skip).limit(limit)

     const totalPropertyies=await PROPERTY.countDocuments(filter)
     const totalPages=Math.ceil(totalPropertyies/limit)
     res.status(200).json({num:properties.length, totalPages, currentPage:parseInt(page), properties}) 
    } catch (error) {
        console.error(error)
        res.status(500).json({message:error.message})
    }
}
const getSingleProperty=async (req, res)=>{
    res.send("get a property")
}

module.exports={createProperty, getLandlordsProperty,updatePropertyAvailability,getAllProperty,getSingleProperty}