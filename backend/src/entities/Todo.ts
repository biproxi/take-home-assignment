import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { TodoStatus } from './TodoStatus';

@ObjectType({ description: 'The TODO model' })
export class Todo {
    @Field(() => ID)
    id: string;

    @Field()
    @Property()
    title: string;
    
    // For enums, need to specify type
    @Field(type => TodoStatus) 
    @Property()
    status: TodoStatus;

    @Field()
    @Property()
    lastUpdatedAt: number;

    @Field()
    @Property()
    createdAt: number;
}

export const TodoModel = getModelForClass(Todo);