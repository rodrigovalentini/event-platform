import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ongmhn0g9x01xn7rzvazp4/master",
  cache: new InMemoryCache(),
});
