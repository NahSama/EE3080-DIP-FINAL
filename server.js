

// app.get("/", (req, res) => {
//     var sx = req.query.sx  
//     var sy = req.query.sy  
//     var ex = req.query.ex  
//     var ey = req.query.ey   
//     console.log(sx, sy, ex, ey)
//   res.sendFile(__dirname + "/index.html");
  
// })
const express = require("express");
const app = express();

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    var sx = req.query.sx  
    var sy = req.query.sy  
    var ex = req.query.ex  
    var ey = req.query.ey   
    console.log(sx, sy, ex, ey)
  res.sendFile(__dirname + "/index.html");
})

app.listen(1338, () => {
  console.log("The server is up and running!");
});

