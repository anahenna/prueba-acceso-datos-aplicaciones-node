import express from 'express'
import path from 'path';
import usuarioRoutes from './routes/usuario.route.js'
import transferenciaRoutes from './routes/transferencia.route.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const __dirname = import.meta.dirname
app.use(express.static(__dirname + '/public'))

app.use('/', usuarioRoutes)
app.use('/', transferenciaRoutes)



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor andando en http://localhost:${PORT}`)
})