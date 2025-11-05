import express from "express";
import { createUser, getUserById, getAllUsers, updateUser, deleteUser } from "../controller/user.controller.js";
const route = express.Router();

route.get("/", getAllUsers)
route.get("/:id", getUserById)
route.post("/", createUser)
route.put("/:id", updateUser)
route.delete("/:id", deleteUser);


export default route;