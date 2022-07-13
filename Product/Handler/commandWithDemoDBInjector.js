const demoQueryDB = require('../Database/queryDB')
const queryDBInjector = require('./commandWithDBinjector')
const commandWithDemoDB = require('./commandWithDemoDB')
demoDB = new demoQueryDB

class demoDBinjector extends queryDBInjector {
    getCommandHandler(){
        return new commandWithDemoDB(this.db)
    }
}

const injector = new demoDBinjector(demoDB)

module.exports = injector