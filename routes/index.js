const express = require("express");
const router = express.Router();
const fs = require("fs");

router.use(express.static('public'));
router.use('/css', express.static(__dirname + 'public/css'));
router.use('/images', express.static(__dirname + 'public/images'));
router.use('/js', express.static(__dirname + 'public/js'));
var titlearr = ['当院について','初診の方へ','院長挨拶']

//layout.evs上にabout.ejsレンダリング
router.get('/', (req, res) => {
    console.log("ok");
    res.render('index',{
        title:  "ホーム",
        layout: './layouts/index',
    });
});
// router.get('/:id', (req, res) => {
//     console.log("ok?");
//     res.render('index',{
//         title:  "ホーム",
//         layout: './layouts/index2',
//     });
// });

module.exports = router;