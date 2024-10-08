const express = require("express");
const router = express.Router();
const fs = require("fs");

// router.use(express.static('../public'));
// router.use('/images', express.static(__dirname + 'public/images'));

//layout.evs上にabout.ejsレンダリング
router.get('/', (req, res) => {
    res.render('info',{
        title: "当院について",
        layout: './layouts/info',
    });
});

var titlearr = ['診療科目','一般内科','小児科','皮膚科']

router.get("/:id", (req, res) => {
    var id = req.params.id;
    res.render('info',{
        title: `Info page${titlearr[id-1]}`,
        layout: './layouts/info',
    });
})

module.exports = router;
