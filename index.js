const express = require("express")

const app = express()

app.get("/",(req,res)=>{
  res.json("hello, im node")
})

app.listen(3000)