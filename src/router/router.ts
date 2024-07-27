import {Router} from "express";
import authRouter from "./authRouter";
import blogRouter from "./blogRouter";
import likeRouter from "./likeRouter";
import CommentRouter from "./commentRouter";
import messageRouter from "./messageRouter";
import auth from "../middleWare/middleware";
import userRouter from "./userRouter";

const router = Router();
router.use('/', authRouter);
router.use(auth);
router.use('/blogs', blogRouter);
router.use('/likes', likeRouter);
router.use('/comments', CommentRouter);
router.use('/chat', messageRouter);
router.use('/user', userRouter);
export default router;