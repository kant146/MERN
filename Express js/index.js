const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./UserRoutes");

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.json());
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port, () => {
  console.log(`Server is Woring on port: ${port}`);
});

app.post("/api/v1/register", (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  res.json({
    success: true,
    name: userName,
    email: userEmail,
    password: userPassword,
  });
});