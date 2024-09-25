const express =require("express")


const router = express.Router();

const userSignUpController = require("../controller/user/userSignup");
const userLoginController = require("../controller/user/userLogin");
const userLogout = require("../controller/user/userLogout");
const authToken = require("../middleware/authToken");
const userDetailsController = require("../controller/user/userDetails");
const allUsers = require("../controller/user/allUsers");
const updateUser = require("../controller/user/updateUser");
const UploadProductController = require("../controller/product/uploadProduct");
const getProductController = require("../controller/product/getProduct");
const updateProductController = require("../controller/product/updateProduct");
const getCategoryProduct = require("../controller/product/getCategoryProduct");
const getCategoryWiseProduct = require("../controller/product/getCategoryWiseProduct");
const getProductDetails = require("../controller/product/getProductDetails");
const searchProduct = require("../controller/product/searchProduct");
const filterProductController = require("../controller/product/filterProductController");
const addToCartController = require("../controller/user/addToCartController");
const countAddToCartProduct = require("../controller/user/countAddToCartProduct");
const addToCartViewProduct = require("../controller/user/addToCartViewProduct");
const updateAddToCartProduct = require("../controller/user/updateAddToCartProduct");
const deleteAddToCartProduct = require("../controller/user/deleteAddToCartProduct");



router.post('/signup', userSignUpController)
router.post('/login', userLoginController)
router.get("/logout", userLogout)
router.get('user-details', authToken,userDetailsController)


//admin panel
router.get('/allUsers',authToken, allUsers)
router.post('/update-user',authToken, updateUser)


// product
router.post("/upload-product",authToken, UploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken, updateProductController)
router.get("/get-categoryProduct",getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetails)
router.get("/search",searchProduct)
router.post("/filter-product",filterProductController)

//user add to cart
router.post("/addtocart",authToken,addToCartController)
router.get("/countAddToCartProduct",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)




module.exports = router






