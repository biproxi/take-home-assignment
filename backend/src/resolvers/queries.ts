import {QueryRunner} from "../utils/QueryRunner"

export async function getTasks(parent: void, args: queryInput, context: any, info: any): Promise<Array<task>|Error> {
    let query = "SELECT * FROM task INNER JOIN userTask ON userTask.taskID = task.id AND userTask.userID = ?;";
    return await QueryRunner.query(query, [args.userID]);
}


export async function getUsers(parent: void, args: queryInput, context: any, info: any): Promise<Array<user>|Error> {
    let query = "SELECT * FROM user;";
    return await QueryRunner.query(query);
}
