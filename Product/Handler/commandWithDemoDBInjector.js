
const queryDBInjector = require('./commandWithDBinjector')
const commandWithDemoDB = require('./commandWithDemoDB')
const demoQueryDB = require('../Database/queryDB')

module.exports = class demoDBinjector extends queryDBInjector {
    getCommandHandler(){
        return new commandWithDemoDB(new demoQueryDB)
    }
}