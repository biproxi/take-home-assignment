import {QueryRunner} from "../utils/QueryRunner"
const bcrypt = require("bcrypt");
const APP_SECRET = 'superSecret1';
const jwt = require('jsonwebtoken');


export async function login(parent: void, args: loginInput, context: any):Promise<Error| {token:string, name:string}> {
    let query = "SELECT `id`,`name`,`password` FROM user WHERE `userName` = ?";
    try{
        let user = await QueryRunner.query(query, [args.input.userName]);
        if(!user[0]) return new Error('Invalid login');
        let password = user[0].password;

        let validPassword = await bcrypt.compare(args.input.password, password);
        if (!validPassword) return new Error('Invalid login');
        let token = jwt.sign({ userID: user[0].id }, APP_SECRET);
        return {token: token, name: user[0].name}
    }catch (e) {
        console.log(e);
        return e;
    }

}


export async function createTask(parent: void, args: newTaskInput, context: any): Promise<task|Error>{
    let taskQuery = "INSERT INTO task (`title`, `completed`,`description`) VALUES (?);";
    let userTaskQuery = "INSERT INTO `userTask`(`userID`, `taskID`) VALUES (?)";
    try {
        let task = await QueryRunner.query(taskQuery, [[args.input.title, false, args.input.description]]);
        let userTask = await QueryRunner.query(userTaskQuery, [[args.input.userID, task.insertId]]);
        if(userTask.affectedRows) return {id: task.insertId, title: args.input.title, description: args.input.description, completed: false};
        else return new Error("Insert Unsuccessful");
    }catch (e) {
        console.log(e);
        return e;
    }
}
export async function createUser(parent: void, args: newUserInput, context: any):Promise<user|Error> {
    let userQuery = "INSERT INTO user (`name`, `username`,`password`) VALUES (?);";
    let password = await bcrypt.hash(args.input.password, 10);
    try {
        let task = await QueryRunner.query(userQuery, [[args.input.name, args.input.userName, password]]);
        if(task.affectedRows) return {id: task.insertId, name: args.input.name, userName: args.input.userName};
        else return new Error("Insert Unsuccessful");
    }catch (e) {
        console.log(e);
        return e;
    }
}

export async function deleteTask(parent: void, args: idInput, context: any): Promise<{id: number}|Error> {
    let deleteTaskQuery = "DELETE FROM `task` WHERE id = ?;";
    try {
        let task = await QueryRunner.query(deleteTaskQuery, [args.input.id]);
        if(task.affectedRows) return {id: args.input.id};
        else return new Error("Delete Unsuccessful");
    }catch (e) {
        console.log(e);
        return e;
    }
}
export async function updateTask(parent: void, args: taskUpdateInput, context: any): Promise<task|Error> {
    let deleteTaskQuery = "UPDATE `task` SET ";
    let params: Array<string|boolean|number> = [];
    if(args.input.title){
        deleteTaskQuery += " `title`= ? ,";
        params.push(args.input.title);
    }
    if(args.input.completed) {
        deleteTaskQuery += " `completed`= ? ,";
        params.push(args.input.completed)
    }
    if(args.input.description){
        deleteTaskQuery += " `description`= ? ";
        params.push(args.input.description)
    }
    params.push(args.input.id);
    deleteTaskQuery = deleteTaskQuery.slice(0, -1);
    deleteTaskQuery += " WHERE id = ?;";
    try {
        let task = await QueryRunner.query(deleteTaskQuery, params);
        if(task.affectedRows) return {id: args.input.id, completed: args.input.completed, description: args.input.description, title: args.input.title};
        else return new Error("Update Unsuccessful");

    }catch (e) {
        console.log(e);
        return e;
    }
}



