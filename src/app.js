const express = require("express");
const routes = require("./api");

const app = express();

app.use(express.json({ extended: true }));

app.use("/api/v1/", routes());

app.listen(8080);
