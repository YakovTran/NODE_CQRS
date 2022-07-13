const demoQueryDB = require('../Database/queryDB')
const commandWithDemoDB = require('./commandWithDemoDB')

module.exports = class demoDBinjector {
    getCommandHandler (){
        return new commandWithDemoDB(new demoQueryDB)
    }
}