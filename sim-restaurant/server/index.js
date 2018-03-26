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
massive(process.env.CONNECTION_STRING).then(db=> {
            app.set('db', db);
            console.log(db, "in massive")
}).catch(console.log);

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    }));

app.use(passport.initialize());
app.use(passport.session());

app.use(checkSession);

app.get('/api/getMenu', (req, res, next) =>{
    console.log(app.get('db'), `""sdfjkshdkfhrs`)
    app.get('db').getMenu()
    .then(response =>{
        res.status(200).json(response);
    }).catch(err =>{
        res.status(500).json(err);
    })
})

// app.post('/api/auth/login', (req, res, next) =>{
//     const { session } = req.
// })

// app.get('/api/test', (req, res) =>{
//     res.status(200).json({message: 'Success'});
// });
 
app.listen(port, () =>{
    console.log(`Listening on port: ${port}`);
})