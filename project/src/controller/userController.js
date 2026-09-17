const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(404).json({ message: "All fileds are required" });
    }

    const exeUser = await User.findOne({ email });
    if (exeUser) {
      return res.status(409).json({ message: "User already existes" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, email, password: hashPassword });

    return res.status(201).json({ message: "Registration done", newUser });
  } catch (error) {
    console.error("Error: ", error);
    return res.status(500).json({ message: "Error while registration" });
  }
};
