const express = require("express");
const emailExistence = require("email-existence");
const router = express.Router();
const { validEmailCheck } = require("../helpers/validEmailCheck");
const {
  formValidationRules,
  formValidate
} = require("../helpers/formValidator");

router.post(
  "/",
  formValidationRules(),
  formValidate,
  validEmailCheck,
  (req, res) => {
    res.send(req.body);
  }
);

module.exports = router;
