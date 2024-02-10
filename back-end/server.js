const express=require("express");
const connectDB=require('./config/dbConfig');
const cors=require("cors")
 
require("dotenv").config();
connectDB();
const app=express();
app.use(cors())

const portfolioRoute=require('./routes/portfolioRoute');
app.use(express.json());
app.get("/", (req, res) => {
    res.send("server is ready")
})

app.use('/api/portfolio',portfolioRoute)
const port=process.env.PORT||3000
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})