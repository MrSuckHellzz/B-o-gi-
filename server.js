//Import packages
const express = require('express');
const ejs = require('ejs');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');

//Initialize app and configure environment variables
const app = express();
dotenv.config({path: './.env.enc'});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

//Middleware for form parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//MongoDB connection
const MONGODB_CONNECTION_URI = process.env.MONGODB_CONNECTION_URI;
mongoose.connect(MONGODB_CONNECTION_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...', err));

//Import and define routes
const categoryRoute = require('./controller/categoryRoute');

app.use('/category', categoryRoute);

//Rendering Homepage
app.get('/', (req,res) => {
    res.render('index');
});

//Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

