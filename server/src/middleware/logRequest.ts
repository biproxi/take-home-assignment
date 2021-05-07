import {Request, Response, NextFunction } from 'express'

export const logRequest = (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(`${req.method} ${req.originalUrl} ${JSON.parse(req.body) || ''}`)
    } catch {
        console.log(`${req.method} ${req.originalUrl} ${req.body || ''}`)
    }
    next()
}

export const logError = (error: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(error)
    next()
}