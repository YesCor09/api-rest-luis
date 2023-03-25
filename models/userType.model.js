import mongoose from 'mongoose'

const userTypeSchema = mongoose.Schema({
    type:{
        type: String,
        required: true,
        trim: true,
        unique: true
    }
})

export default mongoose.model('UserType', userTypeSchema)