import express from 'express';
import Role from '../controllers/role.controller';
// import roles from './roles.routes';

import { verifyUser, createUser, login } from '../controllers/user.controller';

const userRouter = express.Router();

// Create a new Tutorial
userRouter.post('/signup', verifyUser);
userRouter.get('/signup/:token', createUser);
userRouter.post('/login', login);
userRouter.post('/role', Role.setRole);

export default userRouter;
