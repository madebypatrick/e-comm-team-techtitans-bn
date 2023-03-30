import express from 'express';
import { verifyUser, createUser,updateProfile,findAllUsers,deleteAllUsers , login } from '../controllers/user.controller';
const userRouter = express.Router();
import {isAdmin,
    isSeller,
    isBuyer,
    checkPermission,} from '../middleware/auth/auth.middleware.js';
// Create a new Tutorial
userRouter.post('/signup', verifyUser);
userRouter.get('/signup/:token', createUser);
userRouter.post('/login',login)
userRouter.put('/:uuid', updateProfile);
// userRouter.get('/profile/users',findAllUsers);
userRouter.get('/profile/users', isAdmin, checkPermission('manage users') ,findAllUsers);
userRouter.delete('/profile/users', isAdmin, checkPermission('manage users') ,deleteAllUsers);
export default userRouter;
