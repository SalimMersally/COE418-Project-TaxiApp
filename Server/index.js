const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

//Routes
const { logInUser, logInCompany } = require("./routes/logIn");
const { signUpUser, signUpCompany } = require("./routes/signUp");
const { editUserInfo, editCompanyInfo } = require("./Routes/editInfo");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "taxiapp",
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/user/edit", (req, res) => {
  console.log("receivng");
  editUserInfo(req, res, db);
});

app.post("/api/company/edit", (req, res) => {
  editCompanyInfo(req, res, db);
});

app.post("/api/user/signup", (req, res) => {
  signUpUser(req, res, db);
});

app.post("/api/company/signup", (req, res) => {
  console.log("singinggg");
  signUpCompany(req, res, db);
});

app.post("/api/user/login", (req, res) => {
  logInUser(req, res, db);
});

app.post("/api/company/login", (req, res) => {
  logInCompany(req, res, db);
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
