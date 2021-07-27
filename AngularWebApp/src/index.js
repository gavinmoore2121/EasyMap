const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events');

const connection = mysql.createConnection({
    host: 'database-2.cj624yplwe0y.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'DB22Bornot2B!',
    database: 'db2'
});

connection.connect();

const port = process.env.PORT || 3306;

const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(events(connection));

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});