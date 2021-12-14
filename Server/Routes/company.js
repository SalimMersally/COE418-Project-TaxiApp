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
};
