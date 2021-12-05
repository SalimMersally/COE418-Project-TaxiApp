module.exports = {
  getAllCompanies: (req, res, db) => {
    const sqlSelect = "SELECT * FROM company ";
    db.query(sqlSelect, function (err, result) {
      console.log(err);
      res.send(result);
    });
  },
};
