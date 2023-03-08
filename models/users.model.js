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
  image:{
    public_id: String,
    secure_url: String
  }
})

export default mongoose.model('User', usersSchema)