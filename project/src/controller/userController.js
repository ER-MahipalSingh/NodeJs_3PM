const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/generateToken");

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

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ message: "All fildes are required" });
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(409).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(403).json({ message: "Invalid password" });
    }
    const token = generateToken(user.id, res);
    return res.status(201).json({ message: "Login successfull", user, token });
  } catch (error) {
    console.error("Error: ", error);
    return res.status(500).json({ message: "Login failed" });
  }
};

exports.getUser = async (req, res) => {
  try {
    // const id = req.user.id;
    const id = req.params.id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User data fetched", user });
  } catch (error) {
    return res.status(500).json({ mesage: "User load failed" });
  }
};
