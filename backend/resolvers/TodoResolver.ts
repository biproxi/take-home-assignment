import {Resolver, Query, Mutation, Arg} from "type-graphql";
import {Todo} from "../models/Todo";
import {CreateTodoInput} from "../inputs/CreateTodoInput";
import {UpdateTodoInput} from "../inputs/UpdateTodoInput";

@Resolver()
export class TodoResolver {
    @Query(() => [Todo])
    todos(): Promise<Todo[]> {
        return Todo.find();
    }

    @Query(() => Todo)
    todo(@Arg("id") id: string): Promise<Todo | undefined> {
        return Todo.findOne({ where: { id } })
    }

    @Mutation(() => Todo)
    async createTodo(@Arg("data") data: CreateTodoInput): Promise<Todo> {
        const todo = Todo.create(data);
        await todo.save();
        return todo;
    }

    @Mutation(() => Todo)
    async updateTodo(@Arg("id") id: string, @Arg("data") data: UpdateTodoInput): Promise<Todo> {
        const todo = await Todo.findOne({ where: { id } });
        if (todo) {
            Object.assign(todo, data);
            await todo.save();
            return todo;
        } else {
            throw new Error("No todo found with given ID");
        }
    }

    @Mutation(() => Boolean)
    async deleteTodo(@Arg("id") id: string): Promise<Boolean> {
        const todo = await Todo.findOne({ where: { id } });
        if (todo) {
            await todo.remove();
            return true;
        } else {
            return false;
        }
    }
}