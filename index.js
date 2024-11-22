const express = require('express')
require('dotenv').config()
console.log(process.env.PORT);

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
}) 

app.get('/github', (req, res) => {
  res.send('<a href="https://github.com/rkm10"><h1>raj_kumar</h1> </a>')
})

app.get('/twitter', (req, res) => {
  res.send('raj_kumar')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})