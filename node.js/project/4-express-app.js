const express = requijre('express')
const app = express()

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})


app.listen(5000,() => {
    console.log('server is lsitening on port 5000');
})