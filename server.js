//Imports
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const infoRouter = require("./routes/info");
const serviceRouter = require("./routes/service");
const fs = require("fs");

const app = express();
const PORT = 5007;

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/images', express.static(__dirname + 'public/images'));
app.use('/js', express.static(__dirname + 'public/js'));

//Set Templating Engine
app.use(expressLayouts);
app.set('layout','./layouts/index.ejs');
app.set('view engine', 'ejs');

var fliechk = fs.existsSync(__dirname + '/public/images/1.jpg');
//console.log(fliechk);

//Navigation
app.get('', (req, res) => {
    res.render('index');
})

app.use("/info",infoRouter);
app.use("/service",serviceRouter);







app.listen(PORT, () => console.log(`App lisetn on port ${PORT}`));