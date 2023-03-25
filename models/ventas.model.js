import mongoose from 'mongoose'

const ventasSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                default: 1
            }
        },
    ],
    totalPrice: {
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('Ventas', ventasSchema)