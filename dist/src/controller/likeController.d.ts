import { Request, Response } from "express";
declare class LikeController {
    private likeService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    add: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    findById: (req: Request, res: Response) => Promise<void>;
    findByDate: (req: Request, res: Response) => Promise<void>;
}
declare const _default: LikeController;
export default _default;
