const express = require('express')

const app = express()

app.listen('3000')

app.route('/').get( (req, res) => res.send(req.query))

app.route('/about/user').get( (req, res) => res.send(req.query))
