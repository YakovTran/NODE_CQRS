
const commandWithDemoDB = require('./commandWithDemoDB')
const demoQueryDB = require('../Database/queryDB')

module.exports = class demoDBinjector {
    getCommandHandler(){
        return new commandWithDemoDB(new demoQueryDB)
    }
}