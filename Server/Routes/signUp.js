module.exports = {
  signUpUser: (req, res, db) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const mobileNB = req.body.mobileNB;
    const sqlInsert =
      "INSERT INTO client (firstname, lastname,email,password,mobileNB) VALUES (?,?,?,?,?)";
    db.query(
      sqlInsert,
      [firstName, lastName, email, password, mobileNB],
      (err, result) => {
        console.log(err);
        if (result !== null) {
          res.send("Sign up succesfull");
        }
      }
    );
  },
  signUpCompany: (req, res, db) => {
    const name = req.body.name;
    const mobileNB = req.body.mobileNB;
    const email = req.body.email;
    const password = req.body.password;
    const description = req.body.description;
    const sqlInsert =
      "INSERT INTO company (name, email, password, mobileNB, description) VALUES (?,?,?,?,?)";
    db.query(
      sqlInsert,
      [name, email, password, mobileNB, description],
      (err, result) => {
        console.log(err);
        if (result !== null) {
          res.send("Sign up succesfull");
        }
      }
    );
  },
};
