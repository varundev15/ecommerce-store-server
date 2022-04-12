const express = require("express");
const cors = require("cors")
const dbcon = require("./database");
const userRoutes = require("./routes/userRoutes")

const app = express();
require("dotenv").config();


app.use(cors());
app.use(express.json());


app.use("/", userRoutes)

app.use(dbcon, () => {
  console.log("hello ")
})

const server = app.listen(process.env.PORT, () => {
  console.log(`server is running ${process.env.PORT}`)
  // addProducts();
})




































// const products = require("./models/products");
// const data = require('./productData.json');



// const addProducts = async () => {

//   for (let i = 0; i < Object.keys(data).length; i++) {
    
//     console.log("adding data to DB");

//     let productData = {
//       name: Object.keys(data)[i],
//       price: Math.floor(Math.random() * 10000),
//       desc:Object.values(data)[i].desc,
//       images: Object.values(data)[i].imgs,
//     }

//     products.create(productData)
//       .then(function (dbProduct) {
//         console.log(dbProduct);
//       })
//       .catch(function (err) {
//         console.log(err);
//       });
//   }

// }