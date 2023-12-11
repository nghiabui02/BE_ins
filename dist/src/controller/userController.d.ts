import { Request, Response } from "express";
declare class UserController {
    private userService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    register: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
    findById: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
