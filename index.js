var express = require("express");
var app = express();

app.get('/contact', function (req, res) {
    res.send("HELLO node");
});


app.listen(3000, function() {
    console.log("Example app listening on port 30001")
    console.log(123);
})
