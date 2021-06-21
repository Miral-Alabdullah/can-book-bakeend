const express = require('express');
const app = express();

const mongoose = require('mongoose');

require('dotenv').config();

const PORT = process.env.PORT;

const getBooks = require('./controllers/books.controller');
const seedUserData = require('./models/user.model');

const cors = require('cors');
app.use(cors());




mongoose.connect('mongodb://localhost:27017/myFavoriteBooks',
    { useNewUrlParser: true, useUnifiedTopology: true }
);


// seedUserData();


app.get('/books', getBooks)

app.listen(PORT);