const express = require('express');
const app = express()
const { db } = require('./models');
const port = 8080

app.use(express.static('public'))

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
  })