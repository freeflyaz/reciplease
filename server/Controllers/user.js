const bcrypt = require("bcrypt");
const userModel = require("../Models/user");

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists:
  const user = await userModel.findOne({ email: email });
  if (user)
    return res
      .status(409)
      .send({ success: false, message: "User already exists" });

  // Hash the password and add the new user to the db:
  try {
    if (password === "") throw new Error();
    const hash = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      ...req.body,
      password: hash,
    });
    await newUser.save();

    res.status(201).send({ success: true, message: "User created" });
  } catch (error) {
    res.status(400).send({ success: false, message: "Could not create user" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user and check their password is correct:
    const user = await userModel.findOne({ email: email });
    const validatedPass = await bcrypt.compare(password, user.password);
    if (!validatedPass) throw new Error();

    res.status(200).send({ success: true, user });
  } catch (error) {
    res
      .status(401)
      .send({ success: false, message: "Username or password is incorrect" });
  }
};

module.exports = { registerUser, loginUser };
// logoutUser;
