import { InputType, Field } from 'type-graphql';
import { Todo } from '../../entities/Todo';

@InputType()
export class CreateTodoInput implements Partial<Todo> {
  @Field()
  title: string;
}
