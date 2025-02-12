//require statements
const path = require('path');
const express= require('express');
const app=express();
const bodyParser= require("body-parser");
const portNumber = 5000;

//espress
app.set("views", path.resolve(__dirname, "templates"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:false}));
process.stdin.setEncoding("utf8");
app.use(express.static(path.join(__dirname,'public')));

//constant variables
const originalDue=10;
const startDate=new Date('2025-02-09');
const today = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
today.setHours(0, 0, 0, 0);

//the math on the time
let timeDiff= today-startDate;
let daysElapsed=Math.floor(timeDiff/86400000)

//express rendering main page
app.get("/", (req, res) => {
    //math calculation on the page
    res.render('index',{balance: `$${(originalDue*Math.pow(1.1, daysElapsed)).toFixed(2)}`});
});

//server starting
app.listen(portNumber);
console.log(`server running at port ${portNumber}`)