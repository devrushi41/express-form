const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const formData = require("./routes/formData");

// middlewares
app.use(bodyParser.json());

app.use("/form", formData);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
