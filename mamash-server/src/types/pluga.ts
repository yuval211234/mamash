import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Pluga {
    @Field()
    id: string;
    @Field()
    name: string;
}