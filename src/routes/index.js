const app = require('express')();


app.use( require('./auth') );


module.exports = app;