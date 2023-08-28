const connection = require('./db/connection')
const routes = require('./routes')
const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use(routes)


app.listen(PORT, () => console.log(`Hit! Your server is listening on http://localhost:${PORT}`))
