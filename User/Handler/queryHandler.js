const queryHandler = require('../Handler/queryHandlerAbstract')

module.exports = class queryDemoDB extends queryHandler {
    insertUser(msg){
        this.db.save(msg)
    }
    updateUser(msg){
        this.db.save(msg)
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
}

exports.getAll = (req,res) => {
    const result = commandHandler.ProjectorDB.getProducts()
    res.send(result)
}

exports.getOne = (req,res)=>{
    const i = req.params.id
    const converted = commandHandler.ProjectorDB.getProducts()
    const result = converted.find(product => product.id == i)
    res.send(result)
}
