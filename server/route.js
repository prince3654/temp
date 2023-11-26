import express from "express"
import {signupUser} from "./Controller/user-controller.js";

const route = express.Router();

route.post("/signup",signupUser)

export default route ;

