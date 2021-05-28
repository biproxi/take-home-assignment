import connection = require("mysql");
import {Pool} from "mysql";
const fs = require("fs"),
    ini = require("ini");
const util = require("util");
const config = ini.parse(fs.readFileSync("config.ini", "utf-8"));

function createConnection(database?: string): Pool {
    const pool: Pool = connection.createPool({
        connectionLimit: 10,
        host: config.database.host,
        user: config.database.username,
        password: config.database.password,
        database: !database ? config.database.database : database,
    });
    pool.query = util.promisify(pool.query);
    return pool;
}
export { createConnection };


