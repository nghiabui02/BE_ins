import {Router} from "express";
import likeController from "../controller/likeController";

const messageRouter = Router();
messageRouter.get('/', likeController.findAll);
messageRouter.post('/', likeController.add);

export default messageRouter;
