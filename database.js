
const mongoose = require("mongoose")
require("dotenv").config();


mongoose.connect(process.env.MONGO_DB,{
    useNewUrlParser: true,
    
    useUnifiedTopology: true
})

const dbcon =mongoose.connection;
dbcon.on("error", console.error.bind(console, "connection error: "));
dbcon.once("open", function () {
  console.log("db Connected successfully");
});

module.exports = dbcon