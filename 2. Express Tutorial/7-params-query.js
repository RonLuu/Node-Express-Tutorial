const express = require("express")
const app = express()
const {products} = require("./data")

app.get("/", (req, res) => {
    res.send("<h1>Home page</h1><a href = \"/api/products \" >products</a>")
})

app.get("/api/products", (req, res) => {
    const newProduct = products.map((product) => {
        const {name, image, price} = product
        return {name, image, price}
    })
    res.json(newProduct)
})

app.get("/api/products/:productID", (req, res) => {
    const {productID} = req.params
    const product = products.find((product) => product.id === Number(productID))
    if (!product)
    {
        res.status(404).send("Product Not Found")
    }
    res.json(product)
})

app.get("/api/products/:productID/reviews/:reviewID", (req, res)=> {
    console.log(res.params)
    res.send("Hello World")
})

app.get("/api/v1/query", (req, res)=> {
    const {search, limit} = req.query
    let sortedProducts = [...products]
    if (search)
    {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if (sortedProducts.length < 1) 
    {
        res.status(200).send("No product matched your search")
        return res.status(200).json({sucess:true, data: [] })
    }
    res.status(200).json(sortedProducts)
})

app.listen(5000, (req, res) =>{
    console.log("Listening on port 5000...")
})