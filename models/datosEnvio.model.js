import mongoose from "mongoose";

const datosEnvioSchema = mongoose.Schema({
    estado:{
        type: String,
        required: true,
        trim: true
    },
    ciudad:{
        type: String,
        required: true,
        trim: true
    },
    municipio:{
        type: String,
        required: true,
        trim: true
    },
    cp:{
        type: Number,
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
    venta:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ventas',
        required: true,
    }
})

export default mongoose.model('DatosEnvio', datosEnvioSchema)