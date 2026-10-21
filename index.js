const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const articleRoutes = require('./routes/article.js');
const authorRoutes = require('./routes/author.js')
app.use('/', articleRoutes);
app.use('/', authorRoutes);

app.listen(3025, () => {
    console.log('App is started at http://localhost:3025');
});