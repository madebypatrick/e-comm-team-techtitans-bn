import express from "express";
import {
  verifyUser,
  createUser,
  forgotPassword,
  getResetPassword,
  resetPassword,
  verifyOtp,
  updateProfile,findAllUsers, 
  login,
} from "../controllers/user.controller";

const userRouter = express.Router();

// Create a new Tutorial

userRouter.patch("/forgot-password", forgotPassword);
userRouter.get("/reset-password/:id/:token", getResetPassword);
userRouter.post("/reset-password/:id/:token", resetPassword);
userRouter.put('/:uuid', updateProfile);
userRouter.get('/profile/users',findAllUsers);
userRouter.post('/signup', verifyUser);
userRouter.get('/signup/:token', createUser);
userRouter.post('/login',login)
userRouter.post('/login/verifyOtp', verifyOtp)

export default userRouter;
