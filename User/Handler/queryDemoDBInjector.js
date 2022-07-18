
const queryHandler = require('./queryHandler')
const demoQueryDB = require('../Database/queryDB')

module.exports = class queryDemoDBinjector {
    getQueryHandler(){
        return new queryHandler(new demoQueryDB)
    }
}