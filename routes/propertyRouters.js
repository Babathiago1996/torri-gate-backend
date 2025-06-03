const router =require("express").Router()
const {createProperty, getLandlordsProperty,updatePropertyAvailability,getAllProperty,getSingleProperty, deleteProperty}=require("../controller/propertyController")
const {isLoggedIn,requiredPermissions}=require("../middleware/auth")

router.post("/", isLoggedIn,requiredPermissions("landlord"), createProperty)
router.get("/landlord", isLoggedIn, requiredPermissions("landlord"), getLandlordsProperty)
router.patch("/landlord/:propertyId",isLoggedIn, requiredPermissions("landlord"), updatePropertyAvailability)
router.delete(
  "/landlord/:propertyId",
  isLoggedIn,
  requiredPermissions("landlord"),
  deleteProperty
);

//tenants
router.get("/", isLoggedIn, getAllProperty)
router.get("/:propertyId", isLoggedIn, getSingleProperty)



module.exports=router
