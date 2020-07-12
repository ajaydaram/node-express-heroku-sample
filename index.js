const express = require("express");
const { pathToFileURL } = require("url");
const app = express();
const { readFile } = require("fs").promises;


app.use(express.static("public"));


app.get("/", async (request, response) => {

    response.send(await readFile("./home.html","utf-8"));
});

app.listen(process.env.PORT || 3000, () => console.log("App available at http://localhost:3000"))
