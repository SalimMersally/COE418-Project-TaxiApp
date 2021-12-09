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
      "SELECT c.name as company,fromloc.city as FCity,fromloc.building as FBuilding, fromloc.street as FStreet,toloc.city as tCity, toloc.building as tBuilding,toloc.street as tStreet,t.Time,t.Date,t.nbOfSeat,t.Description, t.tripID,t.numberOfPackages,car.manifacturerCompany,d.firstName,d.lastName,car.model, car.color,car.licenseChar, car.licenseNB,d.mobileNB as DNumber, c.mobileNB as CNumber FROM trip t JOIN location fromloc JOIN location toloc JOIN car JOIN driver d JOIN company C ON fromloc.locationID = t.fromLocationID AND toloc.locationID = t.toLocationID AND t.licenseChar = car.licenseChar AND t.licenseNB = car.licenseNB AND t.drivingLicenseNB = d.drivingLicenseNB AND c.companyID = t.companyID WHERE DATE < current_date() AND clientID = ? ";
    db.query(sqlSelect, [clientID], function (err, result) {
      console.log(err);
      res.send(result);
    });
  },
};
