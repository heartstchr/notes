const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => res.send('Hello World!'))
app.post('/notes', function (req, res) {
    res.send('Got a POST request')
})
app.put('/note', function (req, res) {
    res.send('Got a PUT request at /user');
})
app.delete('/note', function (req, res) {
    res.send('Got a DELETE request at /user')
})


app.use('/static', express.static(path.join(__dirname, 'public')))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))