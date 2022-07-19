var db = require('../Database/commandEventDB')

exports.getEvents = (req,res) => {
    res.send(db)
}