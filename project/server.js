const express = require("express");
const dotenv = require("dotenv");
const { coneectDatabase } = require("./src/db/db");

dotenv.config();
const app = express();

coneectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is working ${process.env.PORT}`);
});
