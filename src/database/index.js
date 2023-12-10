// const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');


const atlasConnectionString = 'mongodb+srv://skywalker:<password>@cluster0.4396x.mongodb.net/empeniosNMP';
const uri = atlasConnectionString.replace('<password>', 'DSadoiLV5aButT3X')


mongoose.connect(uri)
    .then(() => {
        console.log('Connection Success!');
    });



