const express = require('express');
const searchController = require('./src/controllers/search');

const app = express();

app.get('/', searchController);

app.listen(process.env.PORT);
