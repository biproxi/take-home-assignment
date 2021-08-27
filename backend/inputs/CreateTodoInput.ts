import {InputType, Field} from "type-graphql";

@InputType()
export class CreateTodoInput {
    @Field()
    title: string;

    @Field()
    status: string;
}