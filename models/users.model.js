import mongoose from 'mongoose'

const usersSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email:{
        type: String,
        trim: true
    },
    password:{
        type: String,
        default: 0
    },
    typeUser:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserType',
        required: true,
        default: '641e8aa0bab69569415ada9c'
    },
    image:{
        public_id: String,
        secure_url: String
    },
    resetToken: { 
        type: String, 
        default: null 
    }
})

export default mongoose.model('User', usersSchema)