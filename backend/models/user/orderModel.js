import mongoose from "mongoose";

const orderDetailSchema = new mongoose.Schema({
    orderId:{
        type: String,
        required: true,
    },
    orderStatus:{
        type: String,
        enum: ['Pending', 'Confirmed', 'Shipped', 'In Transit', 'Delivered', 'Cancelled', 'Returned', 'Refunded'],
        required: true,
    },
    items:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }],
    quantity:{
        type: Number,
        required: true,
    },
    discountedPrice:{
        type: Number,
        required: true,
    },
    actualPrice: {
        type: Number,
        required: true,
    },
    billSummary:{
        type: {
            gst: {
                type: Number,
                required: true
            },
            discountedHandlingCharge:{
                type: Number,
                required: true,
            },
            actualHandlingCharge:{
                type: Number,
                required: true
            },
            discountenDeliveryFee:{
                type: Number,
                required: true,
            },
            actualDeliveryFee:{
                type: Number,
                required: true
            }
        }
    },
    deliveryAddress:{
        type: String,
        required: true,
    },
    orderPlacedOn:{
        type: String,
        required: true
    },
    orderArriveOn:{
       type: String,
       required: true,
    }
})

const orderSchema = new mongoose.Schema({
    items: [{
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        },
        orderDetails: orderDetailSchema,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
},{timestamps: true});

const Order = mongoose.model('Order', orderSchema);

export default Order;