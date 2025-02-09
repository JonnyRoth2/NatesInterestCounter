const path = require('path');
const express= require('express');
const app=express();
const bodyParser= require("body-parser");
const portNumber = 5000;
app.set("views", path.resolve(__dirname, "templates"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:false}));
process.stdin.setEncoding("utf8");
app.use(express.static(path.join(__dirname,'public')));
const originalDue=10;
const startDate=new Date('2025-02-09');
let today=new Date();
let timeDiff= today-startDate;
let daysElapsed=Math.floor(timeDiff/86400000)
app.get("/", (req, res) => {
    res.render('index',{balance: `$${(originalDue*Math.pow(1.1, daysElapsed))}`});
});
app.listen(portNumber);
console.log(`server running at port ${portNumber}`)