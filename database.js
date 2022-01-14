const {MongoClient} = require('mongodb');

const mongoConnect = () => {
    MongoClient.connect('mongodb+srv://yakovtran:code0101001@cluster0.iwtie.mongodb.net/nodemo?retryWrites=true&w=majority'
    ).then (client => {
        console.log('MongoDB Connected !');
    }).catch (err => {
        console.log(err);
    });
    
}

module.exports = mongoConnect;