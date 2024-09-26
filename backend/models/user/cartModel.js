import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    totalItems: {
        type: Number,
        required: true
    },
    items: [{
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item',
            required: true
        },
        quantity: /* {
            type: {
                totalQuantity: */ {
            type: Number,
            required: true,
        }/* ,
                unit: {
                    type: String,
                    enum: ["pac", "pcs"],
                    required: true,
                },
            }
        }, */
    }]
})

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;