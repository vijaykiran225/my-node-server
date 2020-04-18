const express = require("express");

const route = express.Router();


route.get("/sample", (req, res) => {

    res.render('homepage', {
        "name": "vijay"
    })
})


route.get("/", (req, res) => {

    var osa = require('osa2')

    var track = osa(() => {
        // return Application('VLC').currentTrack.name()
        var f = Application('VLC');
        // f.includeStandardAdditions = true;
        // f.activate();
        // f.play();

        // check if playing and app open first!

        return {
            "name": f.nameOfCurrentItem(),
            "time": f.currentTime(),
            "path": f.pathOfCurrentItem()
        };
    })

    track().then(x => res.json(x)).catch(console.error)
    // res.send("hello");
})


module.exports = route;