const express = require('express')

const path = require('path')
const app = express()
const Config = require('config');


const db = require('./database.js')
console.log('db',db);

app.get('/', (req, res) => res.sendFile('views/index.html', {root: __dirname + '/client' }))
app.post('/notes', function (req, res) {
    res.send('Got a POST request')
})
app.put('/note', function (req, res) {
    res.send('Got a PUT request at /user');
})
app.delete('/note', function (req, res) {
    res.send('Got a DELETE request at /user')
})

app.use('/static', express.static('public'));
app.use('/module', express.static('client/node_modules'));

app.listen(Config.server.port, () => console.log(`Example app listening on port ${Config.server.port}!`))