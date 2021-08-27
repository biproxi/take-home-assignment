import {InputType, Field} from "type-graphql";

@InputType()
export class UpdateTodoInput {
    @Field( { nullable: true })
    title?: string;

    @Field({ nullable: true })
    status?: string;

    @Field()
    lastUpdatedAt: number = Date.now() / 1000;
}