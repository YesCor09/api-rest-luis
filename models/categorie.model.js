import mongoose from 'mongoose'

const categorieSchema = mongoose.Schema({
    categorie:{
        type: String,
        required: true,
        trim: true,
        unique: true
    }
})

export default mongoose.model('Categorie', categorieSchema)