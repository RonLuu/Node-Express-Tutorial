const express = require("express")
const {products} = require('./data')
const app = express()


app.get("/", (req, res) =>
    {
        res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
    }
)

app.get("/api/products", (req, res) =>
    {
        const newProduct = products.map((product) =>
            {
                const {id, name, image} = product;
                return {id, name, image}        
            }
        )

        res.json(newProduct)
    }
)
app.get("/api/products/:requestProductID", (req, res) =>
    {
        console.log("whatsupt")
        const {requestProductID} = req.params;
        const singleProduct = products.find((product) => product.id === Number(requestProductID));
        if (!singleProduct)
        {
            return res.status(404).send("Product Does Not Exist")
        }

        return res.json(singleProduct)        
    }
)

app.listen(5000, (req, res) =>
    {
        console.log("Listening on port 5000...")
    }
)