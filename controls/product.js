const Product=require("../Modals/Schema")


exports.addProduct=async (req,res)=>{
const product=await new Product(req.body)
    product.save((err,product)=>{
        if(err){
            return res.json({
                name:err
            })
        }
        res.json({
            _id:product._id,
            name:product.name,
            price:product.price,
            description:product.description
        })
    })
}

exports.getProductById=async (req,res,next,id)=>{

    await Product.findById(id).exec((err,user)=>{
        if(err || !user){
            return res.status(400).json({
                errror:"no user was found in Db"
            })
        }

        req.profile=user
        next()
       
})
}
exports.getProduct=async (req,res)=>{
    const _id=req.query.id
    await Product.findById(_id).exec((err,user)=>{
        if(err || !user){
            return res.status(400).json({
                errror:"no user was found in Db"
            })
        }

        
        return res.json(user)
       
})
}

exports.updateProduct=(req,res)=>{
    Product.findByIdAndUpdate(
        {_id:req.profile._id,},
        {$set:req.body},
        {new:true,useFindAndModify:false},
        (err,user)=>{
            if(err){
                return res.status(400).json({
                    error:"database not exist"
                })
            }
           
            res.json(user)
        }

    )
}

exports.getAllProduct=(req,res)=>{
    Product.find().exec((err,data)=>{
        if(err) return res.status(400).json({
            errror:"no product found"
        })
        return res.json(data)
    })
}