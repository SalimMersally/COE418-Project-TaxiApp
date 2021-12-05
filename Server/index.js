const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const session = require("express-session");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "taxiapp",
});

const app = express();

app.use(cors());
app.use(express.json());
// app.use(
//   session({
//     secret: "secret",
//     resave: true,
//     saveUninitialized: true,
//   })
// );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.post("/api/user/signup", (req, res) => {
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;
//   const email = req.body.email;
//   const password = req.body.password;
//   const mobileNB = req.body.mobileNB;
//   const sqlInsert =
//     "INSERT INTO client (firsstname, lastname,email,password,mobileNB) VALUES (?,?,?,?,?)";
//   db.query(
//     sqlInsert,
//     [firstName, lastName, email, password, mobileNB],
//     (err, result) => {
//       console.log(result);
//       console.log(err);
//     }
//   );
// });

// app.post("/api/company/signup", (req, res) => {
//   const name = req.body.name;
//   const dateOfEstablishment = req.body.dateOfEstablishment;
//   const email = req.body.email;
//   const password = req.body.password;
//   const description = req.body.description;
//   const sqlInsert =
//     "INSERT INTO company (firsstname, lastname,email,password,mobileNB) VALUES (?,?,?,?,?)";
//   db.query(
//     sqlInsert,
//     [name, email, password, dateOfEstablishment, description],
//     (err, result) => {
//       console.log(result);
//       console.log(err);
//     }
//   );
// });

app.post("/api/user/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const sqlSelect = "SELECT * FROM client WHERE email = ? AND password = ? ";
  db.query(sqlSelect, [email, password], function (err, result) {
    console.log(err);
    if (result.length < 1) {
      res.send("Wrong email or password");
    } else {
      res.send(result);
    }
  });
});

app.post("/api/company/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const sqlSelect = "SELECT * FROM company WHERE email = ? AND password = ? ";
  db.query(sqlSelect, [email, password], function (err, result) {
    console.log(err);
    if (result.length < 1) {
      res.send("Wrong email or password");
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
