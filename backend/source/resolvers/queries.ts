import { QueryRunner } from "../utils/QueryRunner";

/**
 * Get tasks for logged in user query. Must be logged in.
 * @param parent
 * @param args
 * @param context
 * @param info
 */
export async function getTasks(
  parent: void,
  args: queryInput,
  context: any,
  info: any
): Promise<Array<task> | Error> {
  if (!context.authToken) return new Error("login required");
  let query =
    "SELECT * FROM task INNER JOIN userTask ON userTask.taskID = task.id AND userTask.userID = ?;";
  return await QueryRunner.query(query, [context.authToken.userID]);
}

/**
 * Get all users.
 * @param parent
 * @param args
 * @param context
 * @param info
 */
export async function getUsers(
  parent: void,
  args: queryInput,
  context: any,
  info: any
): Promise<Array<user> | Error> {
  let query = "SELECT * FROM user;";
  return await QueryRunner.query(query);
}
