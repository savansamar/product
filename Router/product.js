const express=require("express");
const { addProduct, getProductById,getProduct,updateProduct,getAllProduct } = require("../controls/product");
const router=express.Router()

router.post('/addProduct',addProduct)
router.param('productId',getProductById)
//router.get('/getProduct /:productId',getProduct)
router.get("/getProduct",getProduct)
router.put('/updateProduct/:productId',updateProduct)
router.get('/getProducts',getAllProduct)

module.exports=router;
