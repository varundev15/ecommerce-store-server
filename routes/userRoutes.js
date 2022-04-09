const router = require("express").Router();

const {register,login} = require("../controllers/usersController")
const {products} = require("../controllers/productsController")

router.post("/register",register);
router.post("/login",login);
router.get("/",products);
module.exports = router;