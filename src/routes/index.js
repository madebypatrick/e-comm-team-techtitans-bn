import { Router } from 'express';
import userRouter from './user.routes';
import logoutRouter from './logout.routes';
import authRouter from './oauth.routes';

const router = Router();

router.use('/user', userRouter);
router.use('/logout', logoutRouter);
router.use('/auth', authRouter);

export default router;
