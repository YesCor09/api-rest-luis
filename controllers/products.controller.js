import Product from '../models/product.model.js'
import {uploadImage, deleteImage} from '../utils/cloudinary.js'
import fs from 'fs-extra'

export const getProducts = async (req, res) => {
    try{
        const products = await Product.find()
        res.json(products)
    } catch(error){
        return res.status(500).json({message:error.message})
    }
}

export const createProduct = async (req, res) => {
    try {
        const {name,description,price,categorie} = req.body
        
        const product = new Product({
            name,
            description,
            price,
            categorie
        })

        if(req.files?.image){
            const rs = await uploadImage(req.files.image.tempFilePath)
            product.image = {
                public_id: rs.public_id,
                secure_url: rs.secure_url
            }
            await fs.unlink(req.files.image.tempFilePath)
        }
        
        await product.save()
        res.json(product)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        if(!product) return res.status(404).json({
            message: 'El producto no existe'
        })
        return res.send(product)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

export const getProductCategorie = async (req, res) =>{
    try {
        const {categorie} = req.body
        const product = await Product.find({categorie})
        return res.send(product)
    } catch (error) {
        console.error(error)
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if(!product) return res.status(404).json({
            message: 'El producto no existe'
        })

        if(product.image?.public_id){
            await deleteImage(product.image.public_id)
        }
        
        return res.send(product)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

export const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;

        const {name,description,price,categorie} = req.body
        
        const product = ({
            name,
            description,
            price,
            categorie
        })
        
        const productImage = await Product.findById(id)
        await deleteImage(productImage.image.public_id)

        if(req.files?.image){
            const rs = await uploadImage(req.files.image.tempFilePath)
            product.image = {
                public_id: rs.public_id,
                secure_url: rs.secure_url
            }
            //await fs.unlink(req.files.image.tempFilePath)
        }

        const productUpdate = await Product.findByIdAndUpdate(id, product, {
            new:true
        })

        return res.json(productUpdate)
    } catch (error){
        return res.status(500).json({message:error.message})
    }
}

