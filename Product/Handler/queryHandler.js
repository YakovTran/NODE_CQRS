var Projector = require('../Handler/commandHandler')

exports.getAll = (req,res) => {
    const result = Array.from(Projector.Projector.productDB.values())
    console.log(result)
    res.send(result)
}

exports.getOne = (req,res)=>{
    let i = req.params.id
    res.json(products.productDB)
}