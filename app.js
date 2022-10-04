const bodyparser = require('body-parser');
const express = require('express');
const engine = require('consolidate');

const app = express();
app.engine('html', engine.mustache);
app.set('view engine', 'html');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Visit http://localhost:${PORT}`);
})

app.get('/', (request, response) => {
    response.render('login.html');
})

app.get('/signup', (request, response) => {
    response.render('signup.html')
})

app.get('/home', (request, response) => {
    response.render('index.html')
})

app.post('/', (request, response) => {
    console.log(request.body);
    response.redirect('/home')
})

app.post('/signup', (request, response) => {
    console.log(request.body);
    response.redirect('/home')
})