const Order = require('../models/orderModel');
const catchAsyncError = require('../middlerware/catchAsyncError');



// create new order

const newOrder = catchAsyncError(async(req,res,next)=>{
    const {shippingInfo,orderItems,paymentInfo,itemsPrice,taxtPrice,shippingPrice,totalPrice} = req.body;

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxtPrice,
        shippingPrice,
        totalPrice,
        paidAt:Date.now(),
        user:req.user._id,
    });
    res.status(201).json({
        success:true,
        order
        });
});

module.exports = {newOrder};