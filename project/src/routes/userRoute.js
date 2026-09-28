const express = require("express");

const {
  register,
  login,
  getUser,
  updateUser,
} = require("../controller/userController");
const { isAuth } = require("../middleware/isAuth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", isAuth, getUser);
router.patch("/update", isAuth, updateUser);

module.exports = router;
