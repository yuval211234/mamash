import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { SoldierResolver } from "./resolvers/soldierResolver";
import { TeamResolver } from "./resolvers/teamResolver";
import { PlugaResolver } from "./resolvers/plugaResolver";

async function bootstrap() {
  // build TypeGraphQL executable schema
  const schema = await buildSchema({
    resolvers: [SoldierResolver, TeamResolver, PlugaResolver],
  });

  // create apollo server
  const server = new ApolloServer({
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