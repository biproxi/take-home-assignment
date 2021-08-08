import { Request, Response } from "express";
import { pool } from "../db";

export async function AddTodo(req: Request, res: Response) {
  try {
    const { title, status, createdAt, lastUpdatedAt } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (title, status, "createdAt", "lastUpdatedAt") VALUES($1, $2, $3, $4) RETURNING *',
      [title, status, createdAt, lastUpdatedAt]
    );

    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.json({ errors: [error] });
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
    const todo = await pool.query('SELECT * FROM todo WHERE "createdAt" = $1', [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (err) {
    res.status(418).send(`There was a problem getting this todo ${err}`);
  }
}

export async function UpdateTodo(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { title, lastUpdatedAt, status } = req.body;
    await pool.query(
      'UPDATE todo SET title = $1, "lastUpdatedAt" = $2, status = $3 WHERE "createdAt" = $4',
      [title, lastUpdatedAt, status, id]
    );
    const todo = await pool.query('SELECT * FROM todo WHERE "createdAt" = $1', [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (err) {
    res
      .status(418)
      .send(`There was a problem updating this todo description ${err}`);
  }
}

export async function DeleteTodo(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM todo WHERE "createdAt" = $1', [id]);
    res.json({ createdAt: id });
  } catch (err) {
    res.status(418).send(`There was a problem deleting ${err}`);
  }
}
