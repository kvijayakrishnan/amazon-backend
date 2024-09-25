
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const dotenv = require("dotenv");
const db = require("./db/db");
const router = require('./routes');

dotenv.config()



const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials:true,
}))

db()

app.use(express.json())
app.use(cookieParser())

app.use('/api', router)


const PORT = process.env.PORT || 4500



app.listen(PORT, () =>{
    console.log(`App is listening ${PORT}`)
})













