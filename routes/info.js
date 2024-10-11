const express = require("express");
const router = express.Router();
const fs = require("fs");

//router.use(express.static('../public'));
//router.use('/images', express.static(__dirname + 'public/images'));

// var fliechk = fs.existsSync('/Users/kobayashi./node-test/node-designtest01/public/images/1.jpg');
// console.log(process.cwd());
// console.log(fliechk);
var titlearr = ['当院について','初診の方へ','院長挨拶']

//layout.evs上にabout.ejsレンダリング
router.get('', (req, res) => {
    res.render('info',{
        title:  titlearr,
        layout: './layouts/info',
    });
});



router.get("/:id", (req, res) => {
    var id = req.params.id;
    res.render('info',{
        title: titlearr,
        layout: './layouts/subinfo',
    });
})
// router.get("/", (req, res) => {
//     res.render('info',{
//         title: "Info2",
//         layout: './layouts/subinfo',
//     });
// })

router.get("/info3", (req, res) => {
    res.render('info',{
        title: "Info3",
        layout: './layouts/subinfo',
    });
})

module.exports = router;