require ('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const massive = require('massive');
const checkSession = require('./middlewares/checkSession');

const port = 3001;

const app = express();

app.use(json());
app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUnintialized: false,
}));

app.use( checkSession);

app.post('/api/auth/login', (req, res, next) =>{
    
})

// app.get('/api/test', (req, res) =>{
//     res.status(200).json({message: 'Success'});
// });
 
app.listen(port, () =>{
    console.log(`Listening on port: ${port}`);
})