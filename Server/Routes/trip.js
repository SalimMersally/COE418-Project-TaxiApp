module.exports = {
  getAllCurrentTrips: (req, res, db) => {
    const clientID = req.query.clientID;
    const sqlSelect =
      "SELECT  T.tripID, LF.city AS FCity, LF.building AS FBuilding, LF.street AS FStreet, TF.city AS TCity, TF.building AS TBuilding, LF.street AS TStreet,T.time, T.date, T.numberOfPackages, T.nbOfSeat, C.name AS company, C.mobileNB AS CNumber, T.description FROM location LF, trip T , location TF , COMPANY C WHERE  LF.locationID = T.fromLocationID AND T.toLocationID = TF.locationID AND C.companyID = T.companyID AND clientID = ? AND T.date > CURRENT_DATE() ORDER BY T.date";
    db.query(sqlSelect, [clientID], function (err, result) {
      console.log(err);
      res.send(result);
    });
  },
  getDriverForTrip: (req, res, db) => {
    const tripID = req.query.tripID;
    const sqlSelect =
      "SELECT  firstName, lastName, mobileNB, drivingLicenseNB FROM  TRIP NATURAL JOIN DRIVER WHERE tripID = ? ";
    db.query(sqlSelect, [tripID], function (err, result) {
      console.log(err);
      res.send(result);
    });
  },
  getCarForTrip: (req, res, db) => {
    const tripID = req.query.tripID;
    const sqlSelect =
      "SELECT  licenseChar, licenseNB, model, color, manifacturerCompany FROM  TRIP NATURAL JOIN CAR WHERE tripID = ? ";
    db.query(sqlSelect, [tripID], function (err, result) {
      console.log(err);
      res.send(result);
    });
  },
  getAllPastTrips: (req, res, db) => {
    const clientID = req.query.clientID;
    const sqlSelect =
      "SELECT c.name as company,fromloc.city as FCity,fromloc.building as FBuilding, fromloc.street as FStreet,toloc.city as tCity, toloc.building as tBuilding,toloc.street as tStreet,t.Time,t.Date,t.nbOfSeat,t.Description, t.tripID,t.numberOfPackages,CAR.manifacturerCompany,d.firstName,d.lastName,CAR.model, CAR.color,CAR.licenseChar, CAR.licenseNB,d.mobileNB as DNumber, c.mobileNB as CNumber FROM TRIP t, LOCATION fromloc, LOCATION toloc, CAR, DRIVER d, COMPANY C WHERE fromloc.locationID = t.fromLocationID AND toloc.locationID = t.toLocationID AND t.licenseChar = CAR.licenseChar AND t.licenseNB = CAR.licenseNB AND t.drivingLicenseNB = d.drivingLicenseNB AND c.companyID = t.companyID AND DATE < current_date() AND clientID = ? ";
    db.query(sqlSelect, [clientID], function (err, result) {
      console.log(err);
      res.send(result);
    });
  },
  getLocationID: (req, res, db) => {
    const fromCity = req.body.fromCity;
    const fromStreet = req.body.fromStreet;
    const fromBuilding = req.body.fromBuilding;
    const toCity = req.body.toCity;
    const toStreet = req.body.toStreet;
    const toBuilding = req.body.toBuilding;
    const ID = [];

    const sqlInsert =
      "INSERT INTO LOCATION (city, building, street) VALUES (?,?,?);";
    const sqlGet =
      " SELECT locationID FROM LOCATION WHERE city = ? AND building = ? AND street = ?; ";

    db.query(sqlGet, [fromCity, fromBuilding, fromStreet], (err1, result1) => {
      console.log(err1);
      if (result1.length !== 0) {
        ID.push(result1[0].locationID);
        getTo();
      } else {
        db.query(
          sqlInsert,
          [fromCity, fromBuilding, fromStreet],
          (err2, result2) => {
            console.log(err2);
            ID.push(result2.insertId);
            getTo();
          }
        );
      }
    });
    function getTo() {
      db.query(sqlGet, [toCity, toBuilding, toStreet], (err1, result1) => {
        console.log(err1);
        if (result1.length !== 0) {
          ID.push(result1[0].locationID);
          res.send(ID);
        } else {
          db.query(
            sqlInsert,
            [toCity, toBuilding, toStreet],
            (err2, result2) => {
              console.log(err2);
              ID.push(result2.insertId);
              res.send(ID);
            }
          );
        }
      });
    }
  },
  addTrip: (req, res, db) => {
    const fromLocationID = req.body.fromLocationID;
    const toLocationID = req.body.toLocationID;
    const clientID = req.body.clientID;
    const companyID = req.body.companyID;
    const date = req.body.date;
    const time = req.body.time;
    const seats = req.body.seats;
    const luggages = req.body.luggages;
    const description = req.body.description;

    const sqlInsert =
      "INSERT INTO TRIP (nbOfSeat, numberOfPackages, Description, Date, Time, clientID, fromLocationID, toLocationID, companyID) VALUES(?,?,?,?,?,?,?,?,?);";
    db.query(
      sqlInsert,
      [
        seats,
        luggages,
        description,
        date,
        time,
        clientID,
        fromLocationID,
        toLocationID,
        companyID,
      ],
      (err, result) => {
        console.log(err);
        if (result !== null) {
          res.send("Trip registered successfully");
        }
      }
    );
  },
  updateTrip: (req, res, db) => {
    const Description = req.body.description;
    const Date = req.body.date;
    const Time = req.body.time;
    const tripID = req.body.tripID;
    const sqlUpdate =
      "UPDATE TRIP SET Date = ? AND Time = ? AND Description = ? WHERE tripID = ?;";
    db.query(sqlUpdate, [Date, Time, Description, tripID], (err, result) => {
      console.log(err);
      if (result !== null) {
        res.send("trip updated successfully");
      }
    });
  },
  sendFeedback: (req, res, db) => {
    const text = req.body.text;
    const rating = req.body.rating;
    const clientID = req.body.clientID;
    const tripID = req.body.tripID;
    const sqlInsert =
      "INSERT INTO FEEDBACK (rate, text,clientID, tripID) VALUES (?,?,?,?);";
    db.query(sqlInsert, [rating, text, clientID, tripID], (err, result) => {
      console.log(err);
      if (result !== null) {
        res.send("Thank you for rating!");
      }
    });
  },
  viewFeedback: (req, res, db) => {
    const tripID = req.query.IDs[0];
    const clientID = req.query.IDs[1];
    const sqlSelect =
      "SELECT rate, text FROM FEEDBACK WHERE clientID = ? AND tripID = ?;";
    db.query(sqlSelect, [clientID, tripID], function (err, result) {
      console.log(err);
      res.send(result);
    });
  },
  deleteTrip: (req, res, db) => {
    const tripID = req.body.tripID;
    const sqlDelete = "DELETE FROM TRIP WHERE tripID = ?; ";
    db.query(sqlDelete, [tripID], function (err, result) {
      console.log(err);
      res.send(result);
    });
  },
};
