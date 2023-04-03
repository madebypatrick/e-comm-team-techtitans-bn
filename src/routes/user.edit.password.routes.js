import editPassword from "../controllers/user.edit.password";
import express from "express";


const editpasswordRouter = express.Router();
editpasswordRouter.put("/:uuid",editPassword)

export default editpasswordRouter