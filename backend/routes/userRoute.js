import express from "express";
import {
  getAllUsers,
  loginController,
  myProfile,
  registerController,
} from "../controllers/user.js";
import { protectedRoute } from "../middleware/token.js";
const route = express.Router();

route.post("/login", loginController);
route.post("/register", registerController);
route.get("/myprofile", protectedRoute, myProfile);
route.get("/allusers", getAllUsers);

export default route;
