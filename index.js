require('./src/database/index');
const express   = require('express');
const cors      = require('cors');
const app       = express();

const {
    json, 
    urlencoded,
} = express;


// MICROSERVICE CONFIG
const port = process.env.PORT || '4000';
app.use( cors({
    origin: '*'
}));

app.use( json() );

app.use(urlencoded({ extended: false}));

//IMPORTING ROUTES
app.use( require('./src/routes/index') );


app.get('/', (req, res, next) => {
    res.json({
        data: 'Nacional Monte de Piedad API on server.'
    })
})

app.listen( port, () => {
    console.log(`Server is started on port: ${port}`);
})