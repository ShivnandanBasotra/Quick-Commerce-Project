import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true,
    },
    mobileNumber: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        minLength: 6,
        required: true
    },
    address: {
        type: {
            savedAddress: {
                type: [String],
            },
            defaultAddress: {
                type: String,
                validate: {
                    validator: function(value) {
                        return this.savedAddress.includes(value);
                    },
                    message: props => `${props.value} is not a valid default address. It must be one of the saved addresses.`
                }
            }
        },
        default:{savedAddress:[], defaultAddress:null}
    },
    cartItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    }],
    wishlistItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }],
    notifications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Notification'
    }],
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }],
    feedbacks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feedback'
    }],
    walletDetails: {
        walletBalance: {
            type: Number,
            default: 0
        },
        transactions: {
            type: [{
                amount: {
                    type: Number,
                    required: true,
                },
                type: {
                    type: String,
                    enum: ["credit", "debit"],
                    required: true
                },
                timestamp: {
                    type: Date,
                    default: Date.now
                }
            },]
        },
    },
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema);

export default User