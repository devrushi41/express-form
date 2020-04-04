const { body, validationResult } = require("express-validator");

const formValidationRules = () => {
  return [
    body("email", "invalid email id")
      .isEmail()
      .normalizeEmail(),
    body("phone", "invalid phone number").isMobilePhone(),
    body("name", "name is required")
      .not()
      .isEmpty()
      .trim()
      .escape(),
    body("message", "no message")
      .not()
      .isEmpty()
      .trim()
      .escape()
  ];
};

const formValidate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors
  });
};

module.exports = {
  formValidationRules,
  formValidate
};
