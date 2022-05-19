const express = require('express')
const req = require('express/lib/request')
const app = express()

app.get('/', (req, res, next) => {
    res.render('index', { title: 'cool, huh', condition: true, anyArray: [1,2,3] })
})

app.get('test/:id', (req, res, next) => {
    res.render('test', { output: req.params.id})

})

app.post('test/submit', (req, res, next) => {
    let id = req.body.id
    res.redirect('/test/' + id)

})

