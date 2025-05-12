const mongoose=require("mongoose")
const Schema=mongoose.Schema;

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match:  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    phoneNumber: {
      type: String,
      unique: true,
      match: /^\+?[1-9][0-9]{7,14}$/,
    },
    profilePicture: {
        type:String,
      default:
        "https://www.djibstyle.com/wp-content/uploads/2019/01/dummy-snapcode-avatar@2x-2.png",
    },
    role:{
        type:String,
        enum:["tenant","landlord"],
        default:"tenant"
    },
    password:{
        type:String,
        minlength:[6,"minimum password length is 6"],
        required:[true, "password is required"]
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    verificationToken:String,
    verificationTokenExpires:Date,
    resetPasswordToken:String,
    resetPasswordExpires:Date

  },
  { timestamps: true }
);

const USER=mongoose.model("user",userSchema)
module.exports=USER