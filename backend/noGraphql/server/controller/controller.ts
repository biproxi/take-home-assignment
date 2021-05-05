import { Response, Request } from "express"
import { ITodo, TodoStatusEnum } from "../../../types/todoInterface";
import Todo from "../../../models/Todo";

/**
 * Function that gets all the todos from the database
 * Returns the todos
 * @param req {Request}
 * @param res {Response}
 */
const getAllTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todoList: ITodo[] = await Todo.find()
        todoList.length ? res.status(200).json({ todoList }) : res.status(400).json({ msg: "Sorry, could not get the todos from the db :'(" })
    } catch(error) {
        console.error("Sorry, there was an unexpected error: ", error);
    }
}

/**
 * Function that adds new todo to the database
 * Returns a message as well as the todo list from the database
 * @param req {Request}
 * @param res {Response}
 */
const addTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const requestBody = req.body as Pick<ITodo, "title" | "status">

        const newTodo: ITodo = new Todo({
            title: requestBody.title,
            status: TodoStatusEnum.Active
        })

        await newTodo.save();

        const todoList: ITodo[] = await Todo.find()

        todoList.length ? res.status(201).json({msg: "New todo successfully added :)", todos: todoList}) : res.status(400).json({ msg: "Sorry, could not add the todos to the db :'(" })
    } catch(error) {
        console.error("Sorry, there was an unexpected error: ", error);
    }
}

/**
 * Function that updates a todo within the database
 * Returns a message as well as the todo list from the database
 * @param req {Request}
 * @param res {Response}
 */
const updateTodo = async(req: Request, res: Response): Promise<void> => {
    try {
        const { params: { id }, body } = req;
        await Todo.findByIdAndUpdate({ _id: id}, body);
        const todoList: ITodo[] = await Todo.find()
        todoList.length ? res.status(200).json({
            msg: "Todo updated",
            todos: todoList
        }) : res.status(400).json({ msg: "Sorry, could not update the todo within the db :'(" })
    } catch(error) {
        console.error("Sorry, there was an unexpected error: ", error);
    }
}

/**
 * Function that deletes a todo from the database
 * Returns a message as well as the todo list from the database
 * @param req {Request}
 * @param res {Response}
 */
const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const todoToDelete: ITodo | null = await Todo.findByIdAndRemove(req.params.id);
        const todoList: ITodo[] = await Todo.find();
        todoList.length ? res.status(200).json({msg: `Successfully deleted todo: ${todoToDelete}`, todos: todoList}) : res.status(400).json({ msg: "Sorry, could not delete the todo from the db :'(" })
    } catch(error) {
        console.error("Sorry, there was an unexpected error: ", error);
    }
}

export { getAllTodos, addTodo, deleteTodo, updateTodo }