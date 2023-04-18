const express=require("express")
const app=express()
app.use(express.json())
const cors=require("cors")
app.use(cors())
const port =process.env.PORT || 4000

app.get("/",(req,res)=>{
    res.stattus(200).json("hello")
})

app.listen(port,()=>{
    console.log("server started")
})