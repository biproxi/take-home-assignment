import {Resolver, Query, Mutation, Arg} from "type-graphql";
import {Todo} from "../models/Todo";
import {CreateTodoInput} from "../inputs/CreateTodoInput";

@Resolver()
export class TodoResolver {
    @Query(() => [Todo])
    todos(): Promise<Todo[]> {
        return Todo.find();
    }

    @Query(() => Todo)
    todo(@Arg("title") title: string): Promise<Todo | undefined> {
        return Todo.findOne({ where: {title} })
    }

    @Mutation(() => Todo)
    async createTodo(@Arg("data") data: CreateTodoInput): Promise<Todo> {
        const todo = Todo.create(data);
        await todo.save();
        return todo;
    }
}