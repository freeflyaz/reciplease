import bcrypt from "bcrypt";
import userModel from "../Models/user";
import { Request, Response } from "express";

//type RouteHandler = (req: Request, res: Response) => Promise<void>;
//gabe If you use this loud handler type then the email and the password are complaining I think I made my life a little harder on The other controller file because of this maybe check it would it help you with!
const registerUser = async (req: Request, res : Response) => {
  const { email, password } = req.body;

  // Check if user` already exists:
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

const loginUser = async (req: Request, res : Response) => {
  const { email, password } = req.body;
  try {
    // Find the user and check their password is correct:
    const user = await userModel.findOne({ email: email });
    if (!user) throw new Error();
    
    const validatedPass = await bcrypt.compare(password, user.password);
    if (!validatedPass) throw new Error();

    res.status(200).send({ success: true, user });
  } catch (error) {
    res
      .status(401)
      .send({ success: false, message: "Username or password is incorrect" });
  }
};

export default { registerUser, loginUser };
// logoutUser;
