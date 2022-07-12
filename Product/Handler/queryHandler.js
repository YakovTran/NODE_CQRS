const commandHandler = require('../Handler/commandDemoQueryDBInjector')

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
