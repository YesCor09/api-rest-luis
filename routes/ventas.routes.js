import {Router} from 'express'
import {getVentas, createVenta, getVenta, deleteVenta} from '../controllers/ventas.controller.js'

const router = Router()

router.get('/ventas', getVentas)
router.get('/ventas/:id', getVenta)
router.post('/ventas', createVenta)
router.delete('/ventas/:id', deleteVenta)

export default router