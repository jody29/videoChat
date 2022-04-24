const server = require('./index').server
const PORT = require('./index').PORT
const dateFormat = require('dateformat')
const { Server } = require('socket.io')

const io = new Server(server)

dateFormat.masks.chatFormat = 'HH:MM'

