module.exports = {
  getCurrentTrips: (req, res, db) => {
    const companyID = req.query.companyID;
    const sqlSelect =
      "SELECT  T.tripID, LF.city AS FCity, LF.building AS FBuilding, LF.street AS FStreet, TF.city AS TCity, TF.building AS TBuilding, LF.street AS TStreet,T.time, T.date, T.numberOfPackages, T.nbOfSeat, C.firstname, C.lastName, C.mobileNB, T.description FROM location LF, trip T , location TF , CLIENT C WHERE  LF.locationID = T.fromLocationID AND T.toLocationID = TF.locationID AND C.clientID = T.clientID AND T.companyID = ? AND T.date >= CURRENT_DATE() ORDER BY T.date";
    db.query(sqlSelect, [companyID], function (err, result) {
      console.log(err);
      res.send(result);
    });
  },
  getHistoryTrips: (req, res, db) => {
    const companyID = req.query.companyID;
    const sqlSelect =
      "SELECT T.tripID, LF.city AS FCity, LF.building AS FBuilding, LF.street AS FStreet, TF.city AS TCity, TF.building AS TBuilding, LF.street AS TStreet,T.time, T.date, T.numberOfPackages, T.nbOfSeat, C.firstname, C.lastName, C.mobileNB, T.description, car.manifacturerCompany,d.firstName AS DFName,d.lastName AS DLName,car.model, car.color,car.licenseChar, car.licenseNB FROM location LF, trip T , location TF , CLIENT C, Car, Driver D WHERE  LF.locationID = T.fromLocationID AND T.toLocationID = TF.locationID AND C.clientID = T.clientID AND T.companyID = ? AND t.licenseChar = car.licenseChar AND t.licenseNB = car.licenseNB AND t.drivingLicenseNB = d.drivingLicenseNB AND T.date < CURRENT_DATE() ORDER BY T.date";
    db.query(sqlSelect, [companyID], function (err, result) {
      console.log(err);
      res.send(result);
    });
  },
  setDriverCARForTrip: (req, res, db) => {
    const tripID = req.body.tripID;
    const driverID = req.body.driverID;
    const licenseCHAR = req.body.licenseCHAR;
    const licenseNB = req.body.licenseNB;
    const sqlInsert =
      "UPDATE TRIP SET drivingLicenseNB = ?, licenseChar = ?, licenseNB = ? WHERE tripID = ? ";
    db.query(
      sqlInsert,
      [driverID, licenseCHAR, licenseNB, tripID],
      function (err, result) {
        console.log(err);
        if (result.length !== 0) {
          res.send("updated");
        }
      }
    );
  },
};
