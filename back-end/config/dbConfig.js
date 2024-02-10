const mongoose=require("mongoose");
const connectDB=async()=>{
    await mongoose.connect(process.env.DB_HOST,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("mongodb connected")
    //console.log(process.env.DB_HOST)
};
module.exports=connectDB;