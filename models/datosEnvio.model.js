import mongoose from "mongoose";

const datosEnvioSchema = mongoose.Schema({
    colonia:{
        type: String,
        required: true,
        trim: true
    },
    calle:{
        type: String,
        required: true,
        trim: true
    },
    noCasa:{
        type: String,
        required: true,
        trim: true
    },
    recibe:{
        type: String,
        required: true,
        trim: true
    },
    telefono:{
        type: Number,
        required: true,
        trim: true
    },
    referencias:{
        type: String,
        required: true,
        trim: true
    },
    venta:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ventas',
        required: true,
    }
})

export default mongoose.model('DatosEnvio', datosEnvioSchema)