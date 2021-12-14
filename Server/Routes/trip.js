module.exports = {
  getAllCurrentTrips: (req, res, db) => {
    const clientID = req.query.clientID;
    const sqlSelect =
      "SELECT c.name as company,fromloc.city as FCity,fromloc.building as FBuilding, fromloc.street as FStreet,toloc.city as tCity, toloc.building as tBuilding,toloc.street as tStreet,t.Time,t.Date,t.nbOfSeat,t.Description, t.tripID,t.numberOfPackages,car.manifacturerCompany,d.firstName,d.lastName,car.model, car.color,car.licenseChar, car.licenseNB,d.mobileNB as DNumber, c.mobileNB as CNumber FROM trip t JOIN location fromloc JOIN location toloc JOIN car JOIN driver d JOIN company C ON fromloc.locationID = t.fromLocationID AND toloc.locationID = t.toLocationID AND t.licenseChar = car.licenseChar AND t.licenseNB = car.licenseNB AND t.drivingLicenseNB = d.drivingLicenseNB AND c.companyID = t.companyID WHERE DATE > current_date() AND clientID = ? ";
    db.query(sqlSelect, [clientID], function (err, result) {
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

  //// the following section is related to everythng concerning the trip
  /// we need to check if location exists and fetch its id, if null add a new location then fetch ID

  addGetLocation: (req, res, db) => {
    const fromCity = req.body.fromCity;
    const fromStreet = req.body.fromStreet;
    const fromBuilding = req.body.fromBuilding;
    const sqlInsert =
      "INSERT INTO LOCATION (city, building, street) VALUES (?,?,?);";
    db.query(sqlInsert, [fromCity, fromBuilding, fromStreet], (err, result) => {
      console.log(err);
      if (result !== null) {
        const fromLocationID = req.query.fromLocationID;
        const sqlGet =
          " SELECT locationID FROM LOCATION WHERE city = ? AND building = ? AND street = ?; ";
        db.query(
          sqlGet,
          [fromCity, fromBuilding, fromStreet],
          function (err1, result1) {
            console.log(err1);
            res.send(fromLocationID);
          }
        );
      }
    });
    const toCity = req.body.toCity;
    const toStreet = req.body.toStreet;
    const toBuilding = req.body.toBuilding;

    db.query(sqlInsert, [toCity, toBuilding, toStreet], (err, result) => {
      console.log(err);
      if (result !== null) {
        const toLocationID = req.query.toLocationID;
        const sqlGet =
          " SELECT locationID FROM LOCATION WHERE city = ? AND building = ? AND street = ?; ";
        db.query(
          sqlGet,
          [toCity, toBuilding, toStreet],
          function (err1, result1) {
            console.log(err1);
            res.send(toLocationID);
          }
        );
      }
    });
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
    const drivingLicenceNB = req.body.drivingLicenseNB;
    const licenceChar = req.body.licenseChar;
    const licenseNB = req.body.licenseNB;
    const tripID = req.body.tripID;

    const sqlUpdate =
      "UPDATE TRIP SET drivingLicenseNB = ? AND licenseChar = ? AND licenseNB = ? WHERE tripID = ?;";
    db.query(
      sqlUpdate,
      [drivingLicenceNB, licenceChar, licenseNB, tripID],
      (err, result) => {
        console.log(err);
        if (result !== null) {
          res.send("trip updated successfully");
        }
      }
    );
  },
};
