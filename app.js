const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from a "public" folder
app.use(express.static(path.join(__dirname, 'static')));

app.get('/certificates', (req, res) => {
  res.sendFile(path.join(__dirname, 'certificates'));
});

app.get('/gpa', (req, res) => {
  res.sendFile(path.join(__dirname, 'gpa'));
});
const fs=require("fs");
let text = fs.readFile("achievements.txt","utf-8" ,(err,data)=>{
    console.log(data);
});
console.log("This is a message")
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
