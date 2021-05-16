import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ListAnimals from "./pages/ListAnimals";

const client = new ApolloClient({
  uri: "<client-uri>",
  cache: new InMemoryCache(),
  headers: {
    "x-api-key": "<api-key>",
    "Content-Type": "application/json",
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ListAnimals />
    </ApolloProvider>
  );
}

export default App;
