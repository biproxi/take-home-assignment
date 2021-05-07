import { Request, Response, NextFunction } from 'express'


// Fallback error handling
export const catchErrors = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (process.env.NODE_ENV === "development") {
        return res.status(500).json({ message: error.message, error: error.toString() })
    }
    return res.status(500).send()
}