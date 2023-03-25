import {Router} from 'express'
import {getUserType, getUserTypeId, deleteUserType, createUserType} from '../controllers/userType.controller.js'

const router = Router()

router.get('/userType', getUserType)
router.get('/userType/:id', getUserTypeId)
router.post('/userType', createUserType)
router.delete('/userType/:id', deleteUserType)

export default router