import { InputType, Field } from 'type-graphql';
import { Todo } from '../../entities/Todo';
import { TodoStatus } from '../../entities/TodoStatus';

@InputType()
export class UpdateTodoInput implements Partial<Todo> {
  @Field()
  id: string;

  @Field()
  title: string;

  // For enums, need to specify type
  @Field((type) => TodoStatus)
  status: TodoStatus;
}
