const Projector = require('../Handler/commandHandler')

exports.getAll = (req,res) => {
    const result = Array.from(Projector.ProjectorDB.productDB.values())
    res.send(result)
}

exports.getOne = (req,res)=>{
    let i = req.params.id
    const convert = Array.from(Projector.ProjectorDB.productDB.values())
    const result = convert.find(product => product.id == i)
    res.send(result)
}
