var Projector = require('../Handler/commandHandler')

exports.getAll = (req,res) => {
    const result = Array.from(Projector.Projector.productDB.values())
    res.send(result)
}

exports.getOne = (req,res)=>{
    let i = req.params.id
    console.log(Projector.Projector.productDB.get(1))
    const temp = Projector.Projector.productDB.get(i)
    const result = temp.i
    res.send(result)
} ///// not working yet..
