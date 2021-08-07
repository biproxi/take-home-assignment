import { Request, Response } from "express";
import { pool } from "../db";

export async function AddTodo(req: Request, res: Response) {
  try {
    const { description, completed } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description, completed) VALUES($1, $2) RETURNING *",
      [description, completed]
    );

    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
}

export async function GetAllTodos(req: Request, res: Response) {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    res.status(418).send(`There was a problem getting all todo status ${err}`);
  }
}
export async function GetTodo(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (err) {
    res.status(418).send(`There was a problem getting this todo ${err}`);
  }
}

export async function UpdateTodoDescription(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { description } = req.body;
    await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [
      description,
      id,
    ]);
    res.json("Todo was updated!");
  } catch (err) {
    res
      .status(418)
      .send(`There was a problem updating this todo description ${err}`);
  }
}
export async function UpdateTodoStatus(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    await pool.query("UPDATE todo SET completed = $1 WHERE todo_id = $2", [
      completed,
      id,
    ]);
    res.json("Todo was updated!");
  } catch (err) {
    res
      .status(418)
      .send(`There was a problem updating this todo status ${err}`);
  }
}

export async function DeleteTodo(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const todo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    res.json("Todo was deleted!");
  } catch (err) {
    res.status(418).send(`There was a problem deleting ${err}`);
  }
}
