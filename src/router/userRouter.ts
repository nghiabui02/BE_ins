import {Router} from "express";
import userController from "../controller/userController";

const userRouter = Router();
userRouter.get('/', userController.findAll);
userRouter.get('users/:id', userController.findById);
userRouter.put('users/:id', userController.update);
export default userRouter;
