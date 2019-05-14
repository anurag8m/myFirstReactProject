var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var PORT = 4000;
app.use(cors());
app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

const mongoURI = 'mongodb://localhost:27017/mernloginreg';
mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))

var Users = require('./routes/Users');
var Contacts = require('./routes/Contacts');

app.use('/users', Users)
app.use('/contacts', Contacts)

app.listen(PORT, function () {
    console.log("server is running on port " + PORT);
})