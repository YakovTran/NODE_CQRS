require('dotenv').config()

module.exports = (req, res, next) => {

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

    channel.publish('testing', 'main', Buffer.from(JSON.stringify(req.body)))

  });
  
  setTimeout(function() {
    connection.close();
    }, 500);
});
next()
}
