const commanHandler = require('./commandHandler')
//import {jest} from '@jest/globals'
const supertest = require('supertest')
const app = require('../../app')
const request = supertest(app)



/*const testHandler = new commanHandler({
        insertProduct : jest.fn()
    })*/

describe ('POST / product', ()=> {
    describe('given body request', ()=> {
        ('response code 200', async()=>{
            const response = await request.get('/test')
        
            expect(response.statusCode).toBe(200)
        
        })
    })
})