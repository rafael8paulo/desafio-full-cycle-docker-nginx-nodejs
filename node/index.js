const express = require('express');
const mysql = require('mysql');
const app = express();

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'appdb'
};

const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Rafael')`
connection.query(sql)

app.get('/', (req, res) => {
  connection.query('SELECT * FROM people', (error, results) => {
    if (error) throw error;

    let names = results.map(result => result.name);
    let response = `<h1>Full Cycle Rocks!</h1><br><ul>${names.map(name => `<li>${name}</li>`).join('')}</ul>`;
    res.send(response);
  });
});

app.listen(3000, () => {
    console.log('Servidor rodando!');
});