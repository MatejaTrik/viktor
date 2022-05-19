const express = require('express')
const app = express()


function middleware (req, res ,next) {
    console.log('i am middleware');

    const errObj = new Error('I am an error')

    next(errObj)
}

function errorHandler (err, req, res, next) {
    if (err) {
        res.send('i am middleware')
        next()
    }
};



app.listen(3000, (req, res) => {
    console.log('server is listening on the port 3000');
})

