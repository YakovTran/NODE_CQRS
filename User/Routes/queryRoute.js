const queryHandlerInjector = require('../Handler/queryDemoDBInjector')
const express = require('express')
const router = express.Router()
const injector = new queryHandlerInjector
const queryDemoDB = injector.getQueryHandler()
require('dotenv').config()

const io = require('socket.io-client')
const socket = io('http://localhost:3000')
socket.emit('query')

/*socket.on('saveUser', msg => {
    queryDemoDB.saveUser(msg)
})*/
socket.on('updateUserBalance', msg => {
    queryDemoDB.updateBalance(msg)
})

router.get('/users', queryDemoDB.getAllUsers)
router.get('/user:id', queryDemoDB.getUser)


const amqp = require('amqplib/callback_api')

amqp.connect(`amqp://${process.env.AMQPHOST}`, function(error0, connection) {
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
        //channel.prefetch(1)
        channel.bindQueue(q.queue, 'testing','main')
        channel.consume(q.queue, function(msg) {
            const data = JSON.parse(msg.content)
            console.log(data)
            queryDemoDB.saveUser(data)
        }, {
            noAck: true
        });
    })
    
  });
});

module.exports = router;