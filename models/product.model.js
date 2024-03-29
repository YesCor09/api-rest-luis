import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description:{
        type: String,
        trim: true
    },
    price:{
        type: Number,
        default: 0
    },
    stock:{
        type: Number,
        default: 1
    },
    categorie:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categorie',
        required: true,
    },
    image:{
        public_id: String,
        secure_url: String
    }
})

export default mongoose.model('Product', productSchema)