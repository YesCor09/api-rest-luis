import UserType from '../models/userType.model.js'

export const getUserType = async (req, res) => {
    try{
        const user = await UserType.find()
        res.json(user)
    } catch(error){
        return res.status(500).json({message:error.message})
    }
}

export const createUserType = async (req, res) => {
    try {
        const {type} = req.body
        
        const user = new UserType({
            type
        })
        await user.save()
        res.json(user)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

export const getUserTypeId = async (req, res) => {
    try {
        const user = await UserType.findById(req.params.id)

        if(!user) return res.status(404).json({
            message: 'El tipo de usuario no existe'
        })
        return res.send(user)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

export const deleteUserType = async (req, res) => {
    try {
        const user = await UserType.findByIdAndDelete(req.params.id)
        if(!user) return res.status(404).json({
            message: 'El tipo de usuario no existe'
        })
        
        return res.send(user)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}