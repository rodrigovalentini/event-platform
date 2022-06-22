import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";
import { Event } from "./pages/Event";

function App() {
  return (
    <ApolloProvider client={client}>
      <Event />
    </ApolloProvider>
  );
}
export default App;
