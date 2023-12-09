const express = require('express');
const app = express();




app.get('/', (req, res, next) => {
    res.json({
        data: 'Hello world'
    })
})

app.listen('4000', () => {
    console.log('Server is started')
})