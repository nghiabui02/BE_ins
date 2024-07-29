import jwt from 'jsonwebtoken';
export const SECRET = '123456'
export default function auth(req , res, next) {
    let authorization = req.headers.authorization;
    if (authorization) {

        let accessToken = req.headers.authorization.split(' ')[1];
        if (accessToken) {
            jwt.verify(accessToken, SECRET, (err: { message: any; }, payload: any) => {
                if (err) {
                    res.status(401).json({
                        error: err.message,
                        message: 'Please sign in to continue'
                    })
                } else {
                    req.decode = payload;
                    next();
                }
            })
        } else {
            res.status(401).json({
                message: 'Please sign in to continue'
            })
        }
    } else {
        res.status(401).json({
            message: 'Please sign in to continue'
        })
    }
}

