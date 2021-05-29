import { createConnection } from "./connection";
const connectionPool = createConnection();
export class QueryRunner {
    /**
     * Query the database of your choice.
     * @param query {String}
     * @param params {Array}
     * @param database {String}
     * @return {Promise<Error|*>}
     */
    static query(
        query: string,
        params: Array<any> = [],
        database?: string
    ): Error | any {
        try {
            return connectionPool.query(query, params);
        } catch (e) {
            console.error(e);
            return new Error("Query failed."); //Error is returned here so users can check for `instanceof error`
        }
    }
}