import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Team {
    @Field()
    id: string;
    @Field()
    name: string;
}