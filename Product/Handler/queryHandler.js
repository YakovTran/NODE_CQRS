const commandWithDemoDB = require('../Handler/commandWithDemoDBInjector')
const injector = new commandWithDemoDB
commandHandler = injector.getCommandHandler()

exports.getAll = (req,res) => {
    const result = Array.from(commandHandler.ProjectorDB.productDB.values())
    res.send(result)
}

exports.getOne = (req,res)=>{
    const i = req.params.id
    const convert = Array.from(commandHandler.ProjectorDB.productDB.values())
    const result = convert.find(product => product.id == i)
    res.send(result)
}
