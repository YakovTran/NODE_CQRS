
const queryDBInjector = require('./commandWithDBinjector')
const commandWithDemoDB = require('./commandWithDemoDB')

module.exports = class demoDBinjector extends queryDBInjector {
    getCommandHandler(){
        return new commandWithDemoDB(this.db)
    }
}