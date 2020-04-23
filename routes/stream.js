const express = require("express");

const route = express.Router();


route.get("/chat/:roomName", (req, res) => {

    res.render('chatWindow', {
        "roomName": req.params.roomName
    })
});




module.exports = route;