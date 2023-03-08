import {v2 as cloudinary} from 'cloudinary'
//import {cloudinaryName, cloudinaryApiKey, cloudinaryApiSecret} from '../'

cloudinary.config({ 
  cloud_name: 'ddcqk5h3m', 
  api_key: '777583473796777', 
  api_secret: 'wGa_jYRr-byNtorqycmxapcJNbk',
  secure: true
});

export async function uploadImage(filePath){
  return await cloudinary.uploader.upload(filePath, {
    folder: 'replit'
  })
}

export async function deleteImage(publicId){
  return await cloudinary.uploader.destroy(publicId)
}