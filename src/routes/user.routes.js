import express from 'express';

import { verifyUser, createUser,login, verifyOtp } from '../controllers/user.controller';

const userRouter = express.Router();

// Create a new Tutorial
userRouter.post('/signup', verifyUser);
userRouter.get('/signup/:token', createUser);
userRouter.post('/login',login)
userRouter.post('/login/verifyOtp', verifyOtp)

export default userRouter;
