const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const {getHomePage} = require('./routes/index');
const {addPortfolioPage, editPortfolioPage, deletePortfolio, addPortfolio, editPortfolio} = require('./routes/portfolio');
const {addResumePage, editResumePage, deleteResume, addResume, editResume} = require('./routes/resume');    
  
const port = 3000;

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'nodeclient',
    password: '123456',
    database: 'fs1030_individal_project'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app


app.get('/', getHomePage);
app.get('/add', addPortfolioPage, addResumePage);
app.get('/edit/:id', editPortfolioPage, editResumePage);
app.get('/delete/:id', deletePortfolio, deleteResume);
app.post('/add', addPortfolio, addResume);
app.post('/edit/:id', editPortfolio, editResume);


// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});