require("dotenv").config()
const express=require("express")
const app=express();
const mongoose=require("mongoose")
const userRouter=require("./routes/userRouter")
const PORT=process.env.PORT || 3000;


// middleware
app.use(express.json());

// routes
app.get("/",(req,res)=>{
    res.status(200).json({success:true, message:"Torri Gate Server"})
})
app.use("/api/auth",userRouter)

// error route
app.use((req,res)=>{
    res.status(404).json({success:false, message:"route not found"})
})
const startServer=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {dbName:"toriigate"})
        app.listen(PORT, ()=>{
            console.log(`App Running on port : ${PORT}`)
        })
    } catch (error) {
        console.log(error)
        
    }
}
startServer();