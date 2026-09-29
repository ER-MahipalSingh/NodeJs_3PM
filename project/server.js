const express = require("express");
// const dotenv = require("dotenv");
// dotenv.config();

const { env } = require("./src/config/env");
const { coneectDatabase } = require("./src/db/db");

const userRoute = require("./src/routes/userRoute");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json())
app.use(cookieParser())
coneectDatabase();

app.use("/api/v1/auth", userRoute);

app.listen(env.PORT, () => {
  console.log(`Server is working ${env.PORT}`);
});
