module.exports = (req, res, next) => {

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
            channel.bindQueue(q.queue,'testing','reply')
            channel.consume(q.queue, function(msg){
                console.log(msg.content.toString())
            })
            
        })    
        channel.publish('testing', 'main', Buffer.from(JSON.stringify(req.body)))
        
      });
    
      setTimeout(function() {
        connection.close();
        process.exit(0)
        }, 500);
    });
    
    next()
    
    }