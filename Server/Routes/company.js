module.exports = {
  getAllCompanies: (req, res, db) => {
    const sqlSelect = "SELECT * FROM company ";
    db.query(sqlSelect, function (err, result) {
      console.log(err);
      res.send(result);
    });
  },
  getDrivers: (req, res, db) => {
    const companyID = req.query.companyID;
    const sqlSelect =
      "SELECT D.* FROM DRIVER D, WORKFOR W, COMPANY C WHERE C.companyID = W.companyID AND D.drivingLicenseNB = W.drivingLicenseNB AND W.dateTo IS NULL AND C.companyID = ?";
    db.query(sqlSelect, [companyID], function (err, result) {
      console.log(err);
      res.send(result);
    });
  },
  getCars: (req, res, db) => {
    const companyID = req.query.companyID;
    const sqlSelect =
      "SELECT R.* FROM CAR R, COMPANY C WHERE C.companyID = R.companyID AND C.companyID = ?";
    db.query(sqlSelect, [companyID], function (err, result) {
      console.log(err);
      res.send(result);
    });
  },
  addCar: (req, res, db) => {
    const manufacturingCompany = req.body.manufacturingCompany;
    const model = req.body.model;
    const NBSeats = req.body.NBSeats;
    const color = req.body.color;
    const licenseChar = req.body.licenseCode;
    const licenseNB = req.body.licenseNB;
    const companyID = req.body.companyID;
    const NBPackages = req.body.companyID;
    const sqlInsert = "INSERT INTO car VALUES (?,?,?,?,?,?,?,?)";
    const sqlSelect =
      "SELECT * FROM car WHERE licenseChar = ? AND licenseNB = ?";
    db.query(sqlSelect, [licenseChar, licenseNB], (err, result) => {
      console.log(err);
      if (result.length !== 0) {
        res.send("Car license already exists");
      } else {
        db.query(
          sqlInsert,
          [
            licenseChar,
            licenseNB,
            manufacturingCompany,
            model,
            color,
            NBSeats,
            NBPackages,
            companyID,
          ],
          (err2, result2) => {
            console.log(err2);
            if (result2.length !== 0) {
              res.send("Car added successfully");
            }
          }
        );
      }
    });
  },
  addDriver: (req, res, db) => {
    const driverLicenseNB = req.body.driverLicenseNB;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const mobileNB = req.body.mobileNB;
    const companyID = req.body.companyID;

    const sqlselect = "SELECT * FROM driver WHERE drivingLicenseNB = ?";
    db.query(sqlselect, [driverLicenseNB], (err, result) => {
      console.log(err);
      console.log(result);
      if (result.length !== 0) {
        sqlAddWork = "INSERT INTO WORKFOR VALUES (?,?,CURRENT_DATE(),NULL)";
        db.query(sqlAddWork, [driverLicenseNB, companyID], (err2, result2) => {
          console.log(err2);
          console.log(result2);
          if (result2.length !== 0) {
            res.send("added");
          }
        });
      } else {
        const sqlInsert = "INSERT INTO DRIVER VALUES (?,?,?,?)";
        db.query(
          sqlInsert,
          [driverLicenseNB, firstName, lastName, mobileNB],
          (err3, result3) => {
            console.log(err3);
            console.log(result3);
            if (result3.length !== 0) {
              const sqlAddWork =
                " INSERT INTO WORKFOR VALUES (?,?,CURRENT_DATE(),NULL)";
              db.query(
                sqlAddWork,
                [driverLicenseNB, companyID],
                (err4, result4) => {
                  console.log(err4);
                  if (result4.length !== 0) {
                    res.send("added");
                  }
                }
              );
            }
          }
        );
      }
    });
  },
  driverLeftWork: (req, res, db) => {
    const drivingLicenseNB = req.body.drivingLicenseNB;
    const companyID = req.body.companyID;
    const sqlDelete =
      "UPDATE workFor SET dateTo = Current_date() WHERE drivingLicenseNB = ? AND companyID = ? ";
    db.query(sqlDelete, [drivingLicenseNB, companyID], function (err, result) {
      console.log(err);
      if (result.length !== 0) {
        res.send("deleted");
      }
    });
  },

  nbDrivers: (req, res, db) => {
    const companyID = req.query.companyID;
    const sqlSelect =
      "SELECT COUNT(*) AS nbOfDriver FROM WORKFOR WHERE companyID= ? AND dateTo IS NULL";
    db.query(sqlSelect, [companyID], function (err, result) {
      console.log(err);
      res.send(result);
    });
  },
  nbCars: (req, res, db) => {
    const companyID = req.query.companyID;
    const sqlSelect = "SELECT COUNT(*) AS nbOfCar FROM CAR WHERE companyID = ?";
    db.query(sqlSelect, [companyID], function (err, result) {
      console.log(err);
      res.send(result);
    });
  },
  rating: (req, res, db) => {
    const companyID = req.query.companyID;
    const sqlSelect =
      "SELECT AVG(rate) as rating FROM FEEDBACK NATURAL JOIN TRIP WHERE companyID = ?";
    db.query(sqlSelect, [companyID], function (err, result) {
      console.log(err);
      res.send(result);
    });
  },
  rank: (req, res, db) => {
    const sqlSelect =
      "SELECT companyID, AVG(rate) as rating FROM FEEDBACK NATURAL JOIN TRIP ORDER BY rating DESC";
    db.query(sqlSelect, function (err, result) {
      console.log(err);
      res.send(result);
    });
  },
};
