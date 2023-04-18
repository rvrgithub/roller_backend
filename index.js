const express=require("express")
const app=express()
app.use(express.json())
const cors=require("cors")
app.use(cors())

app.get("/",(req,res)=>{
    res.stattus(200).json("hello")
})

app.listen(4000,()=>{
    console.log("server started")
})