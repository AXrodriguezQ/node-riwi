const express = require('express');

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes/estudiantes.routes'));
app.use(require('./routes/profesores.routes'));

module.exports = app;