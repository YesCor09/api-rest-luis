import User from '../models/users.model.js'
import {uploadImage, deleteImage} from '../utils/cloudinary.js'
import fs from 'fs-extra'
import { ObjectId } from 'mongodb';
import { transporter } from '../utils/nodemailer.js';


export const getUsers = async (req, res) => {
  try{
    const users = await User.find()
    res.json(users)
  } catch(error){
    return res.status(500).json({message:error.message})
  }
}

export const createUser = async (req, res) => {
    try {
        const {name,email,password} = req.body

        const veriUser = await User.findOne({name})
        const veriEmail = await User.findOne({email})

        if(veriUser&&veriEmail) return res.status(400).json({message: "El nombre de Usuario y Correo ya estan en uso"})
        if(veriUser) return res.status(400).json({message: "El usuario ya esta en uso"})
        if(veriEmail) return res.status(400).json({message: "El correo ya esta en uso"})
        
        const user = new User({
            name,
            email,
            password
        })

        if(req.files?.image){
            const rs = await uploadImage(req.files.image.tempFilePath)
            user.image = {
                public_id: rs.public_id,
                secure_url: rs.secure_url
            }
            await fs.unlink(req.files.image.tempFilePath)
        }
        
        await user.save()
        res.json(user)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if(!user) return res.status(404).json({
            message: 'El usuario no existe'
        })
        return res.send(user)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

export const getUserByEmail = async (req, res) => {
    try {
        const {email} = req.body
        const user = await User.findOne({email})

        if(!user) return res.status(404).json({
            message: 'El usuario no existe'
        })
        return res.send(user)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

export const valUser = async (req, res) => {
    try {
        const {email,password} = req.body
        const user = await User.findOne({email,password})

        if(!user) return res.status(404).json({
            message: 'Correo o contrase??a incorrectos'
        })
        return res.send(user)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user) return res.status(404).json({
            message: 'El usuario no existe'
        })

        if(user.image?.public_id){
            await deleteImage(user.image.public_id)
        }
        
        return res.send(user)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

export const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const userUpdate = await User.findByIdAndUpdate(id, req.body, {
            new:true
        })
        return res.json(userUpdate)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

export const recPass = async (req, res) =>{
    try {
        const { email } = req.body;
    
        // Verificar si el correo electr??nico proporcionado est?? registrado en la base de datos
        const user = await User.findOne({ email });
    
        if (!user) {
            return res.status(500).json({message:'El correo electr??nico proporcionado no est?? registrado'})
        }
    
        // Generar un token ??nico para el usuario y almacenarlo en la base de datos
        const token = Math.round(Math.random() * 1000000);

        //const expiration = new Date(Date.now() + 3600000); // La fecha de vencimiento ser?? en una hora

        await User.updateOne({ _id: user._id }, { $set: { resetToken: token } });
    
        // Enviar el correo electr??nico al usuario con un enlace que incluya el token generado
        //const resetLink = `http://192.168.1.163:3000/restablecerContrasena/${token}`;
        await transporter.sendMail({
            from: 'toopfodye@gmail.com',
            to: email,
            subject: 'Recuperaci??n de contrase??a',
            text: `Su codigo de recuperacion de contrase??a es: ${token}
            \nSi usted no ha solicitado este correo de recuperacion ignorelo.`
        });

        return res.json({message:'Se ha enviado un correo electr??nico de recuperaci??n de contrase??a'})
    } catch (error) {
        console.log(error);
        return res.status(500).send('Ha ocurrido un error en el servidor');
    }
}