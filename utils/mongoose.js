import mongoose from 'mongoose'
import {mongodbURI} from '../config.js'

export async function connectDB(){
  try{
    await mongoose.connect(mongodbURI) 
    console.log('Conectado a mongo')
  } catch (error){
    console.error(error)
  }
}
