require('./env');

const express = require('express');
const session = require('express-session');
const app = express();
const controller = require('./controller');
const port = 3000;
const { errorHandler } = require('./lib/error-handler');

app.use(express.static('public'));
app.set('views', `${__dirname}/../views`);
app.set('view engine', 'pug');

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));
app.use(express.urlencoded({ extended: true }));
app.use('/', controller);
app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on port ${port}!`));