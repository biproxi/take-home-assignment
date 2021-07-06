import { Request, Response, NextFunction } from "express"

const CLIENT_SECRET = 'shhh-its-a-secret'

export const authMiddleware = (request: Request, response: Response, next: NextFunction) => {
    const  { headers: { authorization }}  = request

    if(authorization !== CLIENT_SECRET) {
        response.status(401).json()
    }

    next()
}
