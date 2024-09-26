import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    ItemName: {
        type: String,
        required: true,
    },
    minBuyQuantity: {
        type: Number,
        required: true,
    },
    isWishlisted:{
        type: Boolean,
        default: false,
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

const Item = mongoose.model('Item', itemSchema);

export default Item;