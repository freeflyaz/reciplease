const bcrypt = require("bcrypt");
const userModel = require("../Models/user");

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email: email });

  if (user) return res.status(409).send({ message: "User already exists" });

  try {
    if (password === "") throw new Error();
    const hash = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(201).send({ message: "User created" });
  } catch (error) {
    res.status(400).send({ message: "Could not create user" });
  }
};

module.exports = { registerUser };
// loginUser, logoutUser;
