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

    channel.publish('testing', 'main', Buffer.from(JSON.stringify(req.body)))

  });
  next()
  /*setTimeout(function() {
    connection.close();
    process.exit(0)
    }, 500);*/
});

}
