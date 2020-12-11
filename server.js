const express = require("express");

const app = express();

const router = require('./routes/router');

app.use("/api", router);

app.listen(5063, () => {
    console.log("I am listening on port 5063");
});