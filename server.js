// needed to start express
const express = require('express');
const app = express();
const expbs = require('express-handlebars');

// uses the handlebars engine
app.engine('handlebars', expbs());
// look for any files that uses handlebars
app.set('view engine', 'handlebars');

// Setting up routes
// res.render is used to render the handlebars page
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

// starts the server
app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});