const express = require('express')
const hbs = require('express-handlebars')
const blog = require('./routes/blog')
const server = express()

// Middleware
server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

server.use('/', blog)

module.exports = server