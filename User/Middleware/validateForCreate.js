var db = require('../Database/commandEventDB')

module.exports = function validateForUpdate (req,res,next) {
    const i = parseInt(req.params.id)
    const user = db.find(e => e.data.userID == i)
        if (user == undefined) {
            next()
        } else {res.send("User ID is already exist")}
    }