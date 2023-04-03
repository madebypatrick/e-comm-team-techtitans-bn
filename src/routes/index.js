import { Router } from 'express';
import userRouter from './user.routes';
import logoutRouter from "./logout.routes";
import editpasswordRouter from './user.edit.password.routes';
const router = Router();

router.use('/user', userRouter);
router.use('/logout',logoutRouter)
router.use('/editpassword',editpasswordRouter)

export default router;
