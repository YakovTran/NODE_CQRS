
const supertest = require('supertest')
const app = require('../../app')
const request = supertest(app)
const commandWithDemoDBInjector = require('./commandWithDemoDBInjector')
const demoQueryDB = require('../Database/queryDB')

jest.mock('../Database/queryDB')

beforeEach(()=> {
    demoQueryDB.mockClear()
})

describe ('POST / product', ()=> {
    describe('given body request', ()=> {
        /*it('response code 200', async()=>{
            const response = await request.post('/product').send({
                name : "demo",
                quantity : 10,
                price : 10
            })
            expect(response.statusCode).toBe(200)
        })
        it('response header content-type', async()=>{
            const response = await request.post('/product').send({
                name : "demo1",
                quantity : 10,
                price : 10
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
        })
        it('response message', async()=>{
            const response = await request.post('/product').send({
                name : "demo2",
                quantity : 10,
                price : 10
            })
            expect(response.body.mes).toEqual('Product added')
        })
        it('response has product id', async()=>{
            const response = await request.post('/product').send({
                name : "demo3",
                quantity : 10,
                price : 10
            })
            expect(response.body.data[0].id).toBeDefined()
        })*/
        it('check method function of mocking queryDB', async ()=>{
            injector = new commandWithDemoDBInjector
            const commandHandler = injector.getCommandHandler()
            expect(demoQueryDB).toHaveBeenCalledTimes(1)
            const queryDBinstance = demoQueryDB.mock.instances[0]

            const req = {
                body : {
                    name : "demo3",
                    quantity : 10,
                    price : 10,
                }
            }
            const res = {
                json(){}
            }
            commandHandler.addProduct(req,res)
            const queryDBinstanceInsertProduct = queryDBinstance.insertProduct
            expect(queryDBinstanceInsertProduct).toHaveBeenCalledTimes(1)
        })
    })
})