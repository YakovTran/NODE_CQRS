var eventDB = require('../Database/eventDB')
var request = require('request')
var playedEventDB = []

exports.getEvents = (req,res)=> {
    res.send(eventDB)
}

exports.playEvent = (req,res) => {
    let i = req.params.id
    for(j =0; j <= i; j++){
        
    }
}