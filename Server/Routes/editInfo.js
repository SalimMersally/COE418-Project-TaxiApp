module.exports = {
  editUserInfo: (req, res, db) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;
    const mobileNB = req.body.mobileNB;
    const clientID = req.body.clientID;
    const sqlInsert =
      "UPDATE client SET firstName = ?, lastName = ?, password = ?, mobileNB = ? WHERE clientID = ?";
    db.query(
      sqlInsert,
      [firstName, lastName, password, mobileNB, clientID],
      (err, result) => {
        console.log(err);
        if (result !== null) {
          res.send("Changes Made Succesfully");
        }
      }
    );
  },
  editCompanyInfo: (req, res, db) => {
    const name = req.body.name;
    const description = req.body.description;
    const password = req.body.password;
    const mobileNB = req.body.mobileNB;
    const companyID = req.body.companyID;
    const sqlInsert =
      "UPDATE company SET name = ?, description = ?, password = ?, mobileNB = ? WHERE companyID = ?";
    db.query(
      sqlInsert,
      [name, description, password, mobileNB, companyID],
      (err, result) => {
        console.log(err);
        if (result !== null) {
          res.send("Changes Made Succesfully");
        }
      }
    );
  },
};
