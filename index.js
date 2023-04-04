const express = require("express");
const app = express();
let PORT = 5000;

const sendMail = require("./sendmail");

app.get("/", (req, res) => {
  res.send("I am a server");
});

let arr = ['jahirulislamn@gmail.com','oviruddaislam512@gmail.com','arifkhanshanto123@gmail.com']

app.post("/mail", sendMail);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`I am live in port no.  ${PORT}`);
    });
  } catch (error) {}
};

start();