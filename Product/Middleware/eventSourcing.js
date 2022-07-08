var eventDB = require('../Database/eventDB')

exports.addProductEvent = (req,res,next) => {
    const event = {
            method: req.method,
            date: new Date(),
            nameInput: req.body.name,
            priceInput: req.body.price,
            quantityInput: req.body.quantity
        }
    eventDB.push(event)
    console.log(eventDB)
    next()
}

exports.updateProductEvent = (req) => {
    const event = {
        method: req.method,
        date: new Date(),
        productID : req.params.id,
        nameInput: req.body.name,
        priceInput: req.body.price,
        quantityInput: req.body.quantity
    }
    eventDB.push(event)
    next()
}

exports.deleteProductEvent = (req) => {
    const event ={
        method: req.method,
        date: new Date(),
        IDRemoved: req.params.id
    }
    eventDB.push(event)
    next()
}

/*
exports.readAllEvent = () => {
    const eventSourceDB = eventSource.EventSourceDB
    var eventStore ={
        eventMethod: req.method,
        date: new Date(),
    }
    eventSourceDB.push(eventStore)
    console.log(eventStore)
}

exports.readOneEvent = (req) => {
  const eventSourceDB = eventSource.EventSourceDB
  var eventStore = {
    eventMethod: req.method,
    date: new Date(),
    readID: req.params.id
  }
  eventSourceDB.push(eventStore)
  console.log(eventStore)
}
*/
// exports.addProductEvent = (name, price, quantity) => {
//   return {
//     eventName: 'Add New Product',
//     date: new Date(),
//     nameInput: name,
//     priceInput: price,
//     quantityInput: quantity
//   }
// }

// exports.updateProductEvent = (name, price, quantity) => {
//   return {
//     eventName: 'Update Product',
//     date: new Date(),
//     nameInput: name,
//     priceInput: price,
//     quantityInput: quantity
//   }
// }

// exports.readAllEvent = productDB => {
//   return {
//     allData: productDB
//   }
// }

// exports.readOneEvent = idInput => {
//   return {
//     data: products[idInput]
//   }
// }
