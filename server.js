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
    socket.on('transaction', ()=> {
        socket.join('transaction')
    })
    socket.on('saveUser', data =>{
        io.to('query').emit('saveUser', data)
    })
    socket.on('newTransaction', data => {
        io.to('command').to('query').emit('updateUserBalance',data)
    })
    
})

const amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
  
    channel.assertExchange('testing','direct', {
      durable: false
    });
    
    channel.assertQueue('', {exclusive: true},function(error2, q){
        if(error2){
            throw error2
        }
        channel.prefetch(1)
        channel.bindQueue(q.queue, 'testing','main')
        channel.consume(q.queue, function(msg) {
            const r = JSON.parse(msg.content)
            console.log(r)
        }, {
            noAck: true
        });
    })
    
  });
});