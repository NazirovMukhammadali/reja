console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

//1
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2: Session

//3
app.set("views", "viwes");
app.set("view engine", "ejs");

//4
app.get("/hello", function (req, res) {
    res.end(`<h1>HELLO WORLD by Ali</h1>`);
});

app.get("/gift", function (req, res) {
    res.end(`<h1>Siz sog'alar bo'limidasiz</h1>`);
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running succesfully on port: ${PORT}`)
})