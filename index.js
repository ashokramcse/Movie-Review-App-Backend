const express = require('express'); //
const app = express(); //
require('dotenv').config();

app.set('port',process.env.PORT || 3000)

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB);

const { Movie } = require('./models/movie');

app.get('/',(req,res) => {
    res.json({
        message : "Success"
    })
})

app.get('/get-all-movies',(req,res) => {
    Movie.find()
        .then((movies) => {
            res.json(movies);
        }, (err) => {
            console.log(err);
        });
});

app.listen(app.get('port'));