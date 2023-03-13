import {Router} from 'express'
import {createUser, updateUser, deleteUser, valUser, getUsers, getUserById, recPass, getUserByEmail } from '../controllers/users.controller.js'
import fileUpload from 'express-fileupload'

const router = Router()

router.get('/users/', getUsers)
router.get('/users/:id', getUserById)
router.post('/usersEmail/', getUserByEmail)
router.post('/valUsers', valUser)
router.post('/recuPassword', recPass)
router.post('/users', fileUpload({useTempFiles : true, tempFileDir : './uploads'}), createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export default router