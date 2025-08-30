const express = require("express")
const app = express()

app.get('/', (req, res)=>
    {
        console.log("User enter the server")
        res.status(200).send("Home Page")
    }
)

app.get("/about", (req, res) =>
    {
        res.status(200).send("About Page")
    }
)

app.get('*', (req, res) =>
    {
        res.status(400).send("<h1>resource not found</h1>")
    }
)

app.listen(5000, () =>
    {
        console.log("Server is listening on port 5000...")
    }
)