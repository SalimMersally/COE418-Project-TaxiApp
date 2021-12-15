const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

//Routes
const { logInUser, logInCompany } = require("./routes/logIn");
const { signUpUser, signUpCompany } = require("./routes/signUp");
const { editUserInfo, editCompanyInfo } = require("./Routes/editInfo");
const {
  getAllCompanies,
  getDrivers,
  getCars,
  addCar,
  addDriver,
  driverLeftWork,
  nbCars,
  nbDrivers,
  rating,
  rank,
} = require("./routes/company");
const {
  getAllCurrentTrips,
  getDriverForTrip,
  getCarForTrip,
  getAllPastTrips,
  getLocationID,
  addTrip,
  updateTrip,
  sendFeedback,
  viewFeedback,
  viewFeedbackCompany,
  deleteTrip,
} = require("./routes/trip");
const {
  getCurrentTrips,
  getHistoryTrips,
  setDriverCARForTrip,
} = require("./Routes/trip-company");

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

// Post methods

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
  signUpCompany(req, res, db);
});

app.post("/api/Trip/getLocationID", (req, res) => {
  getLocationID(req, res, db);
});

app.post("/api/Trip/add", (req, res) => {
  addTrip(req, res, db);
});

app.post("/api/Trip/edit", (req, res) => {
  updateTrip(req, res, db);
});

app.post("/api/Trip/sendFeedback", (req, res) => {
  sendFeedback(req, res, db);
});
app.post("/api/Trip/delete", (req, res) => {
  deleteTrip(req, res, db);
});
app.post("/api/company/addCar", (req, res) => {
  addCar(req, res, db);
});
app.post("/api/company/addDriver", (req, res) => {
  addDriver(req, res, db);
});
app.post("/api/company/DriverLeft", (req, res) => {
  driverLeftWork(req, res, db);
});

app.post("/api/trip-company/setDriverCarForTrip", (req, res) => {
  setDriverCARForTrip(req, res, db);
});
// Get Methods

app.get("/api/user/login", (req, res) => {
  logInUser(req, res, db);
});

app.get("/api/company/login", (req, res) => {
  logInCompany(req, res, db);
});

app.get("/api/trip/current", (req, res) => {
  getAllCurrentTrips(req, res, db);
});
app.get("/api/trip/past", (req, res) => {
  getAllPastTrips(req, res, db);
});
app.get("/api/trip/current/car", (req, res) => {
  getCarForTrip(req, res, db);
});
app.get("/api/trip/current/driver", (req, res) => {
  getDriverForTrip(req, res, db);
});

app.get("/api/companies", (req, res) => {
  getAllCompanies(req, res, db);
});

app.get("/api/company/drivers", (req, res) => {
  getDrivers(req, res, db);
});

app.get("/api/company/cars", (req, res) => {
  getCars(req, res, db);
});

app.get("/api/company/nbCars", (req, res) => {
  nbCars(req, res, db);
});

app.get("/api/company/nbDrivers", (req, res) => {
  nbDrivers(req, res, db);
});

app.get("/api/company/rating", (req, res) => {
  rating(req, res, db);
});

app.get("/api/Trip/viewFeedback", (req, res) => {
  viewFeedback(req, res, db);
});

app.get("/api/Trip/viewFeedbackCompany", (req, res) => {
  viewFeedbackCompany(req, res, db);
});

app.get("/api/company/rank", (req, res) => {
  rank(req, res, db);
});

app.get("/api/trip-company/current", (req, res) => {
  getCurrentTrips(req, res, db);
});

app.get("/api/trip-company/history", (req, res) => {
  getHistoryTrips(req, res, db);
});

// Start Server

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
