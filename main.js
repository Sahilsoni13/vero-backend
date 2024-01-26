const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!1')
})
app.get('/about', (req, res) => {
  res.send('Hello about')
})
app.get('/contact', (req, res) => {
  res.send('Hello contact')
})
app.get('/help', (req, res) => {
  res.send('Hello help')
})
app.get('/bio', (req, res) => {
  res.send('Hello bio')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})