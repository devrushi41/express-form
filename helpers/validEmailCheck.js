const emailExistence = require("email-existence");

exports.validEmailCheck = (req, res, next) => {
  const email = req.body["email"];
  emailExistence.check(email, (error, response) => {
    if (response) {
      return next();
    } else {
      return res.status(422).json({ error: "please give another mail id" });
    }
  });
};
