import express from "express";


import {
  verifyUser,
  createUser,
  forgotPassword,
  getResetPassword,
  resetPassword,
  updateProfile,findAllUsers, 
  login,
} from "../controllers/user.controller";

<<<<<<< HEAD
=======
import { verifyUser, createUser,login, verifyOtp } from '../controllers/user.controller';
>>>>>>> c17a850 (feature(Authentication):Two factor authentication)

const userRouter = express.Router();

// Create a new Tutorial
<<<<<<< HEAD


userRouter.post("/signup", verifyUser);
userRouter.get("/signup/:token", createUser);
userRouter.post("/login", login);

userRouter.patch("/forgot-password", forgotPassword);
userRouter.get("/reset-password/:id/:token", getResetPassword);
userRouter.post("/reset-password/:id/:token", resetPassword);
userRouter.put('/:uuid', updateProfile);
userRouter.get('/profile/users',findAllUsers);


=======
userRouter.post('/signup', verifyUser);
userRouter.get('/signup/:token', createUser);
userRouter.post('/login',login)
userRouter.post('/login/verifyOtp', verifyOtp)
>>>>>>> c17a850 (feature(Authentication):Two factor authentication)

export default userRouter;
