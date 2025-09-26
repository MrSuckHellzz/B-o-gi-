const express = require('express');
const ejs = require('ejs');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
dotenv.config({path: './.env.enc'});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.render('index');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

