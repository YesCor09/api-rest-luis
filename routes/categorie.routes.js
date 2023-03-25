import {Router} from 'express'
import {getCategorie, getCategorieId, deleteCategorie, createCategorie} from '../controllers/categorie.controller.js'

const router = Router()

router.get('/categorie', getCategorie)
router.get('/categorie/:id', getCategorieId)
router.post('/categorie', createCategorie)
router.delete('/categorie/:id', deleteCategorie)

export default router