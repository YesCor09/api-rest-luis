import Categorie from '../models/categorie.model.js'

export const getCategorie = async (req, res) => {
    try{
        const categorie = await Categorie.find()
        res.json(categorie)
    } catch(error){
        return res.status(500).json({message:error.message})
    }
}

export const createCategorie = async (req, res) => {
    try {
        const {categorie} = req.body
        
        const cat = new Categorie({
            categorie
        })
        await cat.save()
        res.json(cat)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

export const getCategorieId = async (req, res) => {
    try {
        const cat = await Categorie.findById(req.params.id)

        if(!cat) return res.status(404).json({
            message: 'Esta categoria no existe'
        })
        return res.send(cat)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

export const deleteCategorie = async (req, res) => {
    try {
        const cat = await Categorie.findByIdAndDelete(req.params.id)
        if(!cat) return res.status(404).json({
            message: 'Esta categoria no existe'
        })
        
        return res.send(cat)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}