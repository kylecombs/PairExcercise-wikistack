const express = require('express');
const app = express()
const { db, User, Page } = require('./models');
const port = 8080

app.use(express.static('public'))

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

const init = async () => {
    try {
        await db.sync()
    
    app.listen(port, () => {
        console.log(`listening at http://localhost:${port}`)
      })
    }
    catch(error) {
        console.log('something went wrong', error)
    }
}

init()