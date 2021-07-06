import { Resolver, Mutation, Arg, Query } from 'type-graphql';
import { Todo, TodoModel } from '../entities/Todo';
import dayjs from 'dayjs';
import { CreateTodoInput } from './types/createTodoInput';
import { UpdateTodoInput } from './types/updateTodoInput';
import { TodoStatus } from '../entities/TodoStatus';

@Resolver(_of => Todo)
export class TodosResolver {
  @Query(_returns => [Todo], {
    description: 'Get all the todos',
  })
  async returnAllTodos(): Promise<Todo[]> {
    return await TodoModel.find();
  }

  @Query(_returns => Todo, {
    description: 'Get a todo by Id',
    nullable: true,
  })
  async returnTodoById(@Arg('id') id: string): Promise<Todo | null> {
    return await TodoModel.findById({ _id: id });
  }

  @Mutation(() => Boolean, {
    description: 'Update a todo',
  })
  async updateTodo(
    @Arg('data') { id, title, status }: UpdateTodoInput
  ): Promise<boolean> {
    const currentDate = dayjs();

    var result = await TodoModel.update(
      { _id: id },
      {
        title: title,
        status: status,
        lastUpdatedAt: currentDate.unix(),
      }
    );

    return result.n === 1 ? true : false;
  }

  @Mutation(() => Todo, {
    description: 'Create a new todo',
  })
  async createTodo(@Arg('data') { title }: CreateTodoInput): Promise<Todo> {
    const currentDate = dayjs();
    const todo = (
      await TodoModel.create({
        title,
        status: TodoStatus.Active,
        lastUpdatedAt: currentDate.unix(),
        createdAt: currentDate.unix(),
      })
    ).save();
    return todo;
  }

  @Mutation(() => Boolean, {
    description: 'Delete a todo by id',
  })
  async deleteTodo(@Arg('id') id: string): Promise<boolean> {
    let result = await TodoModel.deleteOne({ _id: id });
    return result.n === 1 ? true : false;
  }
}
