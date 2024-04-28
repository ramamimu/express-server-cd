const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get("/", (request, response) => {
  response.send("hello world");
});

app.get("/ping", (request, response) => {
  response.send("pong");
});

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});
