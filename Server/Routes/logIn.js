module.exports = {
  logInUser: (req, res, db) => {
    const email = req.body.email;
    const password = req.body.password;
    const sqlSelect = "SELECT * FROM client WHERE email = ? AND password = ? ";
    db.query(sqlSelect, [email, password], function (err, result) {
      console.log(err);
      if (result.length < 1) {
        res.send("Wrong email or password");
      } else {
        res.send(result);
      }
    });
  },
  logInCompany: (req, res, db) => {
    const email = req.body.email;
    const password = req.body.password;
    const sqlSelect = "SELECT * FROM company WHERE email = ? AND password = ? ";
    db.query(sqlSelect, [email, password], function (err, result) {
      console.log(err);
      if (result.length < 1) {
        res.send("Wrong email or password");
      } else {
        res.send(result);
      }
    });
  },
};
