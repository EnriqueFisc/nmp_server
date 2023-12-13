const app = require('../app');
const request = require('supertest');


// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImRhdGEiOiJkYXRhIHRvIGJlIHN0b3JlIGluIHRva2VuIn0sImlhdCI6MTcwMjM0Mjg5Mn0.YzQo9FEjFBoVeZHJ1F5fgfyVFy156hC-eOFU8SV3QT0'

describe('Testing on Authentication Service', () => { 
    test('should create user', async() => { 
        const resp = await  request(app)
                .post("/users")
                .send({
                    "name": "Jorge",
                    "lastname": "Fischer",
                    "email": "jorge5@mail.com",
                    "password":"test"
                })
                .expect(200)
     })

     test('should login', async() => { 
        const resp = await  request(app)
        .post("/users/auth")
        .send({
            "email": "jorge1@mail.com",
            "password":"test"
        })
        .expect(200)

        
     })
 })