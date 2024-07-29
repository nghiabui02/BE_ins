import {Request, Response} from "express";
import authService from "../service/AuthService";
import {validate} from "class-validator";
import {User} from "../entity/user";

class AuthController {
    private authService;

    constructor() {
        this.authService = authService;
    }

    register = async (req: Request, res: Response) => {
        const user = new User();
        user.name = req.body.name;
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;

        const errors = await validate(user);
        if (errors.length > 0) {
            return res.status(400).json({ errors: errors.map(err => err.constraints) });
        }

        try {
            let result = await authService.register(req.body);
            res.status(201).json(result);
        } catch (error) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }
    }


    login = async (req: Request, res: Response) => {
        try {
            let resultCheck = await authService.checkUser(req.body);
            res.status(200).json({
                token : resultCheck,
                username :req.body.username,
                name :req.body.name,
                success: true,

            });
        } catch (e) {
            console.log('error login: ', e);
            res.status(500).json({
                message: 'error login',
                success: false
            });

        }
    }
}

export default new AuthController();
