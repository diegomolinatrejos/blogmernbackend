// servidor express
import express from "express"
import cors from "cors"
import db from './database/DataBase.js'
import blogRouter from "./routes/BlogRoutes.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use('/blogs', blogRouter)

try {
    await db.authenticate()
    console.log('Conexión a base de datos exitosa')
} catch {
    console.log(`El error de conexión es: ${error}`)
}

// codigo solo para probar respuesta de servidor
/*
app.get('/', (req, res)=>{
    res.send("Servidor funcionando")
} )
*/

app.listen(8000, ()=>{
    console.log('Servidor corriendo en http://localhost:8000/')
})