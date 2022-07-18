var userDB = new Map()
var balanceDB = new Map()

module.exports = class demoQueryDB {
    saveUser(data){
        userDB.set(data.userID, data)
        balanceDB.set(data.userID, data.balance)
    }
    getUsers(){
        var users = Array.from(userDB.values())
        return users
    }
}
