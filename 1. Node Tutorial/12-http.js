const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Hello World");
    }
    if (req.url === "/about") {
        res.end("Here is our short history");
    }

    res.end(`
        <h1>Oops!</h1>
        <p>We can't find what you're looking for</p>
        <a href='/'>Back home</a>
    `);
});

server.listen(5000, () => {
    console.log("Server is listening on port 5000...");
});
