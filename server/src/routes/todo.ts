import express, { Request, Response } from "express"
import * as admin from 'firebase-admin';
import { TodoStatusEnum } from "../model/TodoStatusEnum";
import { Todo } from "../model/Todo";

const serviceAccount = require('../auth/biproxi-todo-firebase-adminsdk-408dn-0fb85fae20.json');

const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://biproxi-todo-default-rtdb.firebaseio.com"
});
const db = firebaseApp.database();
const ref = db.ref('todo')

const todo = express.Router();

todo.get('/', (request: Request, response: Response) => {
    response.json({ status: 'up' })
})

todo.post('/todo', async (request: Request, response: Response) => {
    const { title, status } = request.body

    if (!title || !status) {
        return response.status(400).json({
            status: "400: BAD REQUEST", message: 'Request body must include title and status'
        })
    }

    let todo: Partial<Todo> = {
        title,
        status,
        lastUpdatedAt: Date.now(),
        createdAt: Date.now(),
    }

    try {
        const created = await ref.push(todo)
        todo = {
            id: created.key,
            ...todo,
        }

    } catch (error) {
        return response.status(500).json(error)
    }
    response.json(todo)
})

todo.get('/todo', async (request: Request, response: Response) => {
    try {
        await ref.once('value', (data) => {
            const todos = data.val()
                ? Object.entries(data.val())
                    .map(entry => ({ ...entry[1] as Todo, id: entry[0], }))
                    .filter(todo => todo.status !== TodoStatusEnum.Archived)
                : []
            return response.json(todos)
        });
    } catch (error) {
        return response.status(500).json(error)
    }
})

todo.get('/todo/archived', async (request: Request, response: Response) => {
    try {
        await ref.once('value', (data) => {
            const archived = data.val()
                ? Object.entries(data.val())
                    .map(entry => ({ ...entry[1] as Todo, id: entry[0] }))
                    .filter(todo => todo.status === TodoStatusEnum.Archived)
                : []
            return response.json(archived)
        });
    } catch (error) {
        return response.status(500).json(error)
    }
})

todo.put('/todo/:id([A-Za-z0-9-_]{20})', async (request: Request, response: Response) => {
    const { id } = request.params;
    const { title, status } = request.body

    if (!(title || !status)) {
        return response.status(400).json({
            status: "400: BAD REQUEST", message: 'Request body must include title and status'
        })
    }

    try {
        await ref.child(id).update({
            title,
            status,
            lastUpdatedAt: Date.now()
        })
    } catch (error) {
        return response.status(500).json(error)
    }

    response.status(204).send()
})

todo.put('/todo/archive/:id([A-Za-z0-9-_]{20})', async (request: Request, response: Response) => {
    const { id } = request.params;

    try {
        await ref.child(id).update({
            status: TodoStatusEnum.Archived,
            lastUpdatedAt: Date.now()
        })
    } catch (error) {
        return response.status(500).json(error)
    }

    response.status(204).send()
})

todo.delete('/todo/:id([A-Za-z0-9-_]{20})', async (request: Request, response: Response) => {
    const { id } = request.params;

    await ref.child(id).remove(() => {
        return response.status(204).send()
    })

})

export default todo
