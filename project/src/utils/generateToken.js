const jwt = require("jsonwebtoken");

exports.generateToken = (id, res) => {
  const token = jwt.sign({ id }, "fghfghfghfghfg", { expiresIn: "7d" });

  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: false,
  };

  res.cookie("token", token, options);
  return token;
};
