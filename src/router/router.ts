import {Router} from "express";
import userRouter from "./userRouter";
import blogRouter from "./blogRouter";
import likeRouter from "./likeRouter";
import CommentRouter from "./commentRouter";
import messageRouter from "./messageRouter";

const router = Router();
router.use('/', userRouter);
router.use('/blogs', blogRouter);
router.use('/likes', likeRouter);
router.use('/comments', CommentRouter);
router.use('/chat', messageRouter);
export default router;