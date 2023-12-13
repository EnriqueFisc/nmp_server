require('./src/database/index');
const express   = require('express');
const cors      = require('cors');
const app       = express();

const {
    json, 
    urlencoded,
} = express;


// MICROSERVICE CONFIG

app.use( cors({
    origin: '*'
}));

app.use( json() );

app.use(urlencoded({ extended: false}));

//IMPORTING ROUTES
app.use( require('./src/routes/index') );

// DOCUMENTATION ROUTE
app.use( require('./src/apiDoc/swagger') )


app.get('/', (req, res, next) => {
    res.json({
        data: 'Nacional Monte de Piedad API on server.'
    })
})


module.exports = app;