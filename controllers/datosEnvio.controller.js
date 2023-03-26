import DatosEnvio from '../models/datosEnvio.model.js'

export const getEnvios = async (req, res) => {
    try{
        const envio = await DatosEnvio.find().populate('venta')
        res.json(envio)
    } catch(error){
        return res.status(500).json({message:error.message})
    }
}

export const createEnvios = async (req, res) => {
    try {
        const envio = new DatosEnvio(req.body)
        await envio.save()
        res.json(envio)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

export const getEnvio = async (req, res) => {
    try {
        const envio = await DatosEnvio.findById(req.params.id).populate('venta')

        if(!envio) return res.status(404).json({
            message: 'El envio no existe'
        })
        return res.send(envio)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

export const deleteEnvios = async (req, res) => {
    try {
        const envio = await DatosEnvio.findByIdAndDelete(req.params.id)
        if(!envio) return res.status(404).json({
            message: 'El envio no existe'
        })
        
        return res.send(envio)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}