const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: "Not Authoriazed" });
  }
  try {
    const decoade = jwt.verify(token, "fghfghfghfghfg");
    req.user = await User.findById(decoade.id);
    if (!req.user) {
      return res.status(404).json({ message: "User not found" });
    }
    next();
  } catch (error) {
    console.error("Error: ", error);
    return res.status(500).json({ message: "Error while authotication" });
  }
};
