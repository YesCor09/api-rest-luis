import nodemailer from 'nodemailer'

// Configurar el transporte de correo electrónico
export const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'toopfodye@gmail.com',
    pass: 'gcqhpqjgtnutrmcv'
  }
});