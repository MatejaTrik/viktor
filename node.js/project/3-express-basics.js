const express = require('express')
const app = express()


app.get('/', (req, res) => {
    console.log('user hit the home page');
    res.send('home page')
})

app.get('/about', (req, res) => {
    console.log('user hit the home page');
    res.send('home page')
})

app.all('*', (req, res) => {
    res.status(404).res.send(' resource not found')
})

app.listen(5000,() => {
    console.log('server is listening on this port');
})


// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
