import {getTasks, getUsers} from "./queries";
import { IResolvers } from 'graphql-tools';

const resolvers: IResolvers = {
    RootQuery: {
        tasks: getTasks,
        users: getUsers
    },
};

export default resolvers