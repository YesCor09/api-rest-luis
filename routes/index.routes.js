import {Router} from 'express'

const router = Router()

//routes
router.get('/', (req, res) => res.send("Holaxdxdd"))

router.get('/ping', (req, res) => res.send("pong"))

export default router