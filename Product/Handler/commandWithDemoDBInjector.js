const demoQueryDB = require('../Database/queryDB')
const commandWithDemoDB = require('./commandWithDemoDB')
demoDB = new demoQueryDB

module.exports = class demoDBinjector {
    getCommandHandler() {
        return new commandWithDemoDB(demoDB)
    } 

}