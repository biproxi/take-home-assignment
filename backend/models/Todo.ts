import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Todo extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: string;

    @Field(() => String)
    @Column()
    title: string;

    @Field(() => String)
    @Column()
    status: string;

    @Field(() => Number)
    @Column({default: Date.now() / 1000})
    createdAt: number;

    @Field(() => Number)
    @Column({default: Date.now() / 1000})
    lastUpdatedAt: number;
}