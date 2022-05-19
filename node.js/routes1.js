const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})



// 
// 
// route methods je HTTP metoda koja je deo express klase

// post rute 

app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })

//   gte rute

app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })

//   mozemo koristiti razne znakove kako bi dosli do novih parametara 

// znak * menja bilo u serdini vec poznate rute

app.get('/ab*cd', (req, res) => {
    res.send('ab*cd')
  })
//   abBILOSTAcd ce biti dobraruta i matchovana od strane servera


//  /X/ bilo sta sto ima X u sebi ce biti mecovano 

app.get(/X/, (req, res) => {
    res.send('/X/')
  })