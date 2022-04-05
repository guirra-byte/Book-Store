import bodyParser from 'body-parser'
import express from 'express'
const app = express()

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))

export { app }