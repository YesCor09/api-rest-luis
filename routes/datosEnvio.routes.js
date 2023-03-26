import {Router} from 'express'
import {getEnvio, createEnvios, getEnvios, deleteEnvios} from '../controllers/datosEnvio.controller.js'

const router = Router()

router.get('/envios', getEnvios)
router.get('/envios/:id', getEnvio)
router.post('/envios', createEnvios)
router.delete('/envios/:id', deleteEnvios)

export default router