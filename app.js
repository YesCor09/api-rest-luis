import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import indexRoutes from './routes/index.routes.js'
import productsRoutes from './routes/products.routes.js'
import usersRoutes from './routes/users.routes.js'
import ventasRoutes from './routes/ventas.routes.js'
import userTypeRoutes from './routes/userType.routes.js'
import categorieRoutes from './routes/categorie.routes.js'
import datosEnvioRoutes from './routes/datosEnvio.routes.js'

const app = express()

app.use(cors())
app.use(morgan('dev'))

app.use(express.json())

app.use(indexRoutes)
app.use(productsRoutes)
app.use(usersRoutes)
app.use(ventasRoutes)
app.use(userTypeRoutes)
app.use(categorieRoutes)
app.use(datosEnvioRoutes)

export default app