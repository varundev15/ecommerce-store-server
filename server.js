const express = require("express");
const  cors = require("cors")
const dbcon = require("./database");
const userRoutes = require("./routes/userRoutes")


const app = express();
require("dotenv").config();


app.use(cors());
app.use(express.json());


app.use("/",userRoutes)

app.use(dbcon,()=>{
    console.log("hello ")
  })

const server = app.listen(process.env.PORT,()=>{
    console.log(`server is running ${process.env.PORT}`)
})