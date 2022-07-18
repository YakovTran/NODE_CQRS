const app = require('./app')
const {createServer} = require('http')
const {Server} = require('socket.io')

const httpServer = createServer(app)
httpServer.listen(3000)

const io = new Server(httpServer, {cors: {origin:['http://localhost:3000']}})
io.on('connection', socket=>{
    socket.on('query', ()=>{
        socket.join('query')
    })
    socket.on('command', ()=>{
        socket.join('command')
    })
    
})
module.exports = io