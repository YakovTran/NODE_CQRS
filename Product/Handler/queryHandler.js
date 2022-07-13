const commandWithDemoDBInjector = require('../Handler/commandWithDemoDBInjector')

injector = new commandWithDemoDBInjector
const commandHandler = injector.getCommandHandler()

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
