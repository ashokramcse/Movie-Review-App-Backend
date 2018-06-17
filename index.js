const express = require('express'); //
const app = express(); //
require('dotenv').config();

app.set('port',process.env.PORT || 3000)

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB);

const { Movie } = require('./models/movies');

app.get('/',(req,res) => {
    res.json({
        message : "Success"
    })
})

app.listen(app.get('port'));