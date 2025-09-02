const expire = require("express")
const app = expire()
const {products} = require("./data")
app.get("/", (req, res) =>
    {
        res.json(products)
    }
)

app.listen(5000, () =>
    {
        console.log("Listening on port 5000")
    }
)
