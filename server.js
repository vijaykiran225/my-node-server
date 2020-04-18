const express = require("express");
const app = express();
const path = require("path");

const insRouter = require("./routes/instruction.js");

app.use(function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    console.log('Request Type:', req.method)
    next()
})
app.use(insRouter);
app.use("/stream", express.static(path.join(__dirname, 'static')));



app.listen(3000);
console.log("app is started");
