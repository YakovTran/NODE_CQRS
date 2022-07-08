var events = require('./eventDB')
var products = require('../Product/Database/commandDB');
const axios = require('axios').default;


exports.getEvents = (req,res)=> {
    res.send(events)
}

exports.playEvent = async (req,res) => {
    products.length = 0
    let requests = []
    let id = req.params.id
    for(i =0; i <= id; i++){
            requests.push(
                axios.request({
                method: events[i].method,
                url: 'http://localhost:3000/eventReplay',
                data : events[i].data,
                params : events[i].params
            }))
    }
    try { await Promise.all(requests)
        res.send(products)
    }
    catch(err){console.log(err)}
}