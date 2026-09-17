const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const { coneectDatabase } = require("./src/db/db");

const userRoute = require("./src/routes/userRoute");

const app = express();

app.use(express.json())
coneectDatabase();

app.use("/api/v1/auth", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is working ${process.env.PORT}`);
});
