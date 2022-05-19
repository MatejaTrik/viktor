const express = require('express')
const app = express()

app.use(middleware)
app.use(middleware2)


function middleware (req, res, next) {
    console.log('This is first function thats being executed');
}

function middleware2 (req, res, next) {
    console.log('This is second function thats being executed');
}

// function standardExpressCallback (request, response, nextMiddleware) {
//     response.send('hello world')
// }

// app.get('/', middleware, standardExpressCallback)


app.get('/', (req, res, next) => {
     res.send('Hello World')
     console.log('this is the third function!');
})

app.listen(3000)