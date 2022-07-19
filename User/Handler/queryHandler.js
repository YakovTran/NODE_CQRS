const queryHandler = require('../Handler/queryHandlerAbstract')

module.exports = class queryDemoDB extends queryHandler {
    saveUser(msg){
        this.db.saveUser(msg)
    }
    getAllUsers = (req,res) => {
        const users = this.db.getUsers()
        res.send(users)
    }
    getUser = (req,res) => {
        const i = req.params.id
        const users = this.db.getUsers()
        const user = users.find(e => e.userID == i)
        res.send(user)
    }
    updateBalance (msg){
        this.db.updateBalance(msg)
    }
}