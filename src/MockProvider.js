import introspectionResult from "../schema.json";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { addMockFunctionsToSchema, makeExecutableSchema } from "apollo-server";
import { printSchema, buildClientSchema } from "graphql";

// create a mock apollo client provider that allows to inject testable data
export default function AutoMockProvider({ children, mockResolvers }) {
  const schemaDSL = printSchema(
    buildClientSchema({ __schema: introspectionResult.__schema })
  );

  const schema = makeExecutableSchema({
    typeDefs: schemaDSL,
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
  });
  addMockFunctionsToSchema({ schema, mocks: mockResolvers });

  // 4) Define ApolloClient (client variable used below)
  const client = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
