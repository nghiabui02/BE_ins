import jwt from 'jsonwebtoken';
import {Request} from "express";
export const SECRET = '123456'
export default function auth(req , res, next) {
    let authorization = req.headers.authorization;
    if (authorization) {

        let accessToken = req.headers.authorization.split(' ')[1];
        if (accessToken) {
            jwt.verify(accessToken, SECRET, (err, payload) => {
                if (err) {
                    res.status(401).json({
                        error: err.message,
                        message: 'Mày là thằng đéo nào'
                    })
                } else {
                    req.decode = payload;
                    next();
                }
            })
        } else {
            res.status(401).json({
                message: 'Mày là thằng đéo nào'
            })
        }
    } else {
        res.status(401).json({
            message: 'Mày là thằng đéo nào'
        })
    }
}

