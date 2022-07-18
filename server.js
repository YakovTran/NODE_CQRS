const app = require('./app')
const {createServer} = require('http')
const {Server} = require('socket.io')

const httpServer = createServer(app)
httpServer.listen(3000)

const io = new Server(httpServer, {cors: {origin:['http://localhost:3000']}})
io.on('connection', socket=>{
    socket.on('event', ()=>{
        socket.join('event')
        io.to('event').to('command').emit('mess', 'testing')
        
    })
    socket.on('commandHandler', ()=>{
        socket.join('command')
    })
    
})
module.exports = io