const express = require('express');

//create a new server
const app = express();

// handles route
app.get("/", function(req, res){
    res.end("Express Server is Running..");
});

app.get("/complement", function(req, res){
    res.end("You look nice todays!")
});

app.listen(4000);
console.log("listening on http://localhost:4000");
