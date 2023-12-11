import {Router} from "express";
import commentController from "../controller/commentController";

const commentRouter = Router();
commentRouter.get('/', commentController.findAll);
commentRouter.post('/', commentController.add);
commentRouter.put('/:id', commentController.update);
commentRouter.delete('/:id', commentController.delete);
commentRouter.get('/:id', commentController.findById);
commentRouter.get('/date', commentController.findByDate);
export default commentRouter;