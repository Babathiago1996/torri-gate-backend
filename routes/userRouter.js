const router = require("express").Router();
const {
  handleRegister,
  handleVerifyEmail,
  handleLogin,
  resendVerificationEmail,
  handleForgotPassword,
  handleResetPassword,
  handleGetUser,
  handleUpdateUser
} = require("../controller/userController");
const {isLoggedIn,requiredPermissions}=require("../middleware/auth")

router.post("/register", handleRegister);
router.post("/verify-email/:token", handleVerifyEmail)
router.post("/login", handleLogin)
router.post("/resend-email", resendVerificationEmail)
router.post("/forgot-password", handleForgotPassword);
router.post("/reset-password", handleResetPassword)
router.get("/user",isLoggedIn, handleGetUser)
router.patch("/user",isLoggedIn,requiredPermissions("landlord"), handleUpdateUser)

module.exports = router;

