const express = require("express");
const app = express();
const path = require("path");
const adaro = require('adaro');
var server = require('http').createServer(app);


var io = require('socket.io')(server);


const insRouter = require("./routes/instruction.js");
const streamRouter = require("./routes/stream.js");

var options = {
    helpers: ['dustjs-helpers']
};

app.engine('dust', adaro.dust(options));
app.set('view engine', 'dust');
app.set('views', path.resolve(__dirname, 'templates'));

app.use(insRouter);
app.use(streamRouter);
app.use("/stream", express.static(path.join(__dirname, 'static')));



io.on('connection', (socket) => {

    socket.on('new', (msg, room) => {
        socket.join(room);
        socket.to(room).broadcast.emit("out", msg);
    });

    socket.on('in', (msg, room) => {
        console.log('a user sent msg', msg);
        socket.to(room).broadcast.emit("out", msg);
    });
});


server.listen(3000);
console.log("server is up");
