import Ventas from '../models/ventas.model.js'

export const getVentas = async (req, res) => {
    try{
        const ventas = await Ventas.find().populate('user').populate('products.product');
        res.json(ventas)
    } catch(error){
        return res.status(500).json({message:error.message})
    }
}

export const createVenta = async (req, res) => {
    try {
        const venta = new Ventas(req.body)
        await venta.save()
        res.json(venta)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

export const getVenta = async (req, res) => {
    try {
        const venta = await Ventas.findById(req.params.id).populate('user').populate('products.product')

        if(!venta) return res.status(404).json({
            message: 'La venta no existe'
        })
        return res.send(venta)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

export const getVentaByIdUser = async (req, res) => {
    try {
        const venta = await Ventas.find({user: req.params.id}).populate('user').populate('products.product')

        if(!venta) return res.status(404).json({
            message: 'Este usuario no ha realizado ninguna compra'
        })
        return res.send(venta)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

export const deleteVenta = async (req, res) => {
    try {
        const venta = await Ventas.findByIdAndDelete(req.params.id)
        if(!venta) return res.status(404).json({
            message: 'La venta no existe'
        })
        
        return res.send(venta)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}