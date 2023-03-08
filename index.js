import app from './app.js'
import {connectDB} from './utils/mongoose.js'

async function main(){
  await connectDB()
  app.listen(3000)
  console.log('Servidor iniciado puerto ', 3000)
}

main()