// needed to start express
const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const path = require('path');

// uses the handlebars engine
// uses files on the layout folder {defaultLayout: 'main'}
// {layoutsDir: 'views/whatever'} let us change the layout folder name
// layoutsDir: path.join(__dirname, 'views/mainLayout') })); makes it compatible with windows
app.engine('handlebars', expbs({ defaultLayout: 'main', 
layoutsDir: path.join(__dirname, 'views/mainLayout') }));
// look for any files that uses handlebars
app.set('view engine', 'handlebars');

// Setting up routes
// res.render is used to render the handlebars page
//{ title: 'Home Page' } changes the title for each page regardles os what the layout handlebars file is set
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home Page', 
        name: 'Erick Henriquez',
        age: 5, 
        isDisplayName: true,
        isAgeEnabled: false
    });
});

app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About Me',
        description: 'super awesome tutorial'
    });
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        isListEnabled: true,
        author: {
            firstName: 'Peter',
            lastName: 'James',
            project: {
                name: 'Build Random Quote'
            }
        }
    });
});
app.get('/each/helper', (req, res) => {

    res.render('contact', {
        people: [
            "Bob",
            "Linda",
            "Tina",
            "Jean",
            "Louise"
        ],
        user: {
            username: 'bobsb',
            age: 40,
            phone: 0983456
        },
        lists: [
            {
                items: ['catfood', 'litter', 'water']
            },
            {
                items: ['tuna', 'vienna sausages', 'corned beef']
            }  
        ]
    });
});
// starts the server
app.listen(8080, () => {
    console.log('Server is starting at port ', 8080);
});