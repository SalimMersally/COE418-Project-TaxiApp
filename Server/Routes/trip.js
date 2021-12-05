module.exports = {
  getAllCurrentTrips: (req, res, db) => {
    const clientID = req.body.clientID;
    const sqlSelect =
      "SELECT c.name,fromloc.city,fromloc.building, fromloc.street,toloc.city,toloc.building,toloc.street,t.Time,t.Date,car1.manifacturerCompany,d.firsstName,d.lastName,car1.carNB,car1.model,d.mobileNB FROM trip t JOIN location fromloc JOIN location toloc JOIN car car1 JOIN driver d JOIN company C ON fromloc.locationID = t.fromLocationID AND toloc.locationID = t.toLocationID AND t.carID = car1.carNB AND t.driverID = d.driverID AND c.companyID = t.companyID WHERE DATE > current_date() AND clientID = ? ";
    db.query(sqlSelect, [clientID], function (err, result) {
      console.log(err);
      res.send(result);
    });
  },
  getAllPastTrips: (req, res, db) => {
    const clientID = req.body.clientID;
    const sqlSelect =
      "SELECT c.name,fromloc.city,fromloc.building, fromloc.street,toloc.city,toloc.building,toloc.street,t.Time,t.Date,car1.manifacturerCompany,d.firsstName,d.lastName,car1.carNB,car1.model,d.mobileNB FROM trip t JOIN location fromloc JOIN location toloc JOIN car car1 JOIN driver d JOIN company C ON fromloc.locationID = t.fromLocationID AND toloc.locationID = t.toLocationID AND t.carID = car1.carNB AND t.driverID = d.driverID AND c.companyID = t.companyID WHERE DATE < current_date() AND clientID = ? ";
    db.query(sqlSelect, [clientID], function (err, result) {
      console.log(err);
      res.send(result);
    });
  },
};
