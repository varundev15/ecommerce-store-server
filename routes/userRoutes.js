const router = require("express").Router();

const { register, login } = require("../controllers/usersController")
const {getproducts} = require("../controllers/productsController")

router.post("/register", register);
router.post("/login", login);
router.get("/getproducts", getproducts);
module.exports = router; 