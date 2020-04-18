const express = require("express");
const app = express();
const path = require("path");
var adaro = require('adaro');

const insRouter = require("./routes/instruction.js");

var options = {
    helpers: ['dustjs-helpers']
};

app.engine('dust', adaro.dust(options));
app.set('view engine', 'dust');
app.set('views', path.resolve(__dirname, 'templates'));

app.use(function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    console.log('Request Type:', req.method)
    next()
})
app.use(insRouter);
app.use("/stream", express.static(path.join(__dirname, 'static')));



app.listen(3000);
console.log("app is started");
