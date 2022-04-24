require('dotenv').config()
const express = require('express')
const http = require('http')
const PORT = process.env.PORT || 6000
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const server = http.createServer(app)

module.exports = {
    server,
    PORT
}

app
.set('view engine', 'ejs')
.set('views', path.join(__dirname + 'views'))
.use(express.static(__dirname + '/public'))
.use(bodyParser.urlencoded({ extended: true }))

require('./websocket.js')
