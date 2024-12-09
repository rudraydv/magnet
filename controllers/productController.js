const Product = require('../models/productModel');
const catchAsyncError = require('../middlerware/catchAsyncError');
const cloudinary = require("cloudinary");


const createProduct = catchAsyncError(async(req,res) =>{

  let images = [];
  if (typeof req.body.images === "string") {

    images.push(req.body.images);

    } else {
      images = req.body.images;
      }

      const imagesLink = [];

      for(let i = 0; i < images.length; i++){
        const result = await cloudinary.v2.uploader.upload(images[i], {
          folder: "products",
          });
          imagesLink.push({
            public_id: result.public_id,
            url: result.secure_url
            });
            }
            req.body.images = imagesLink;
            req.body.user = req.user.id 

    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        message: 'Product created successfully', product});
});

const home = async (req,res) =>{
    try {
        res.status(200).send("this is home page bawa");
    } catch (error) {
        console.error(error);
    }
};
module.exports = { 
    home ,
    createProduct
};