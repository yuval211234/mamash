"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_1 = require("apollo-server");
const type_graphql_1 = require("type-graphql");
const soldierResolver_1 = require("./resolvers/soldierResolver");
const teamResolver_1 = require("./resolvers/teamResolver");
const plugaResolver_1 = require("./resolvers/plugaResolver");
async function bootstrap() {
    // build TypeGraphQL executable schema
    const schema = await type_graphql_1.buildSchema({
        resolvers: [soldierResolver_1.SoldierResolver, teamResolver_1.TeamResolver, plugaResolver_1.PlugaResolver],
    });
    // create apollo server
    const server = new apollo_server_1.ApolloServer({
        schema,
        tracing: true,
        cacheControl: true,
        // engine: false, // we will provide our own ApolloEngine
        engine: {
            // set `APOLLO_ENGINE_API_KEY` env variable or put here your own API key
            apiKey: process.env.APOLLO_ENGINE_API_KEY,
        },
    });
    // launch the Apollo Engine
    const { url } = await server.listen(4000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}
bootstrap();
