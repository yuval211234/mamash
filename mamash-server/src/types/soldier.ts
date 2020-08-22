import {ObjectType, Field} from 'type-graphql';

export type SoldierStatus = 'here' | 'missing' | 'undefined';

@ObjectType()
export class Soldier {
    @Field()
    id: string;
    @Field()
    name: string;
    @Field()
    teamId: string;
    @Field()
    status: SoldierStatus;
    @Field()
    reason: string
}