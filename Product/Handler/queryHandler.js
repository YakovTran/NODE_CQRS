var products = require('../Database/queryDB')

exports.getAll = (req,res) => {
    res.json({data: products})
}

exports.getOne = (req,res)=>{
    let i = req.params.id
    res.json(products[i])
}