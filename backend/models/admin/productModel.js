import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productImage:{
        type: String,
        required: true,
    },
    ItemName: {
        type: String,
        required: true,
    },
    minBuyQuantity: {
        type: Number,
        required: true,
    },
    quickAdds: {
        type: [{
            quantity: {
                type: Number,
                required: true,
            },
            discountedPrice: {
                type: Number,
                required: true,
            }
        }]
    },
    discountedPrice: {
        type: Number,
        required: true,
    },
    actualPrice: {
        type: Number,
        required: true,
    }
})

const Product = mongoose.model('Item', productSchema);

export default Product;