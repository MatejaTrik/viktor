const express = require('express')
const app = express()
const {products} = require('./data')


app.get('/',(req, res) => {
    res.send('<h1>Home page</h1> ','<a href="/api/products">Products</a>')
    const newProducts = products.map((product) => {
        const {id, name, image } = product
        return {id, name, image }
    })
    res.json(newProducts)
})


app.get('/api/products/:productID',(req, res) => {
    console.log(req);
    console.log(req.params);

    const singleProduct = products.find((product) => product.id === 1)
    res.json(singleProduct)
    })


app.listen(5000, () => {
    console.log('server is lsitening on port 5000');
})