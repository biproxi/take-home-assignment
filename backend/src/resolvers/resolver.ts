import {getTasks, getUsers} from "./queries";
import { IResolvers } from 'graphql-tools';
import {createTask, createUser, deleteTask, login, updateTask} from "./mutations";

const resolvers: IResolvers = {
    RootQuery: {
        tasks: getTasks,
        users: getUsers
    },
    RootMutation: {
        createTask: createTask,
        createUser: createUser,
        deleteTask: deleteTask,
        updateTask: updateTask,
        login: login
    }
};

export default resolvers