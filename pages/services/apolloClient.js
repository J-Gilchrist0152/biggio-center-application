import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-us-east-1.graphcms.com/v2/ckzekoep138iw01z59a8p5x42/master",
    cache: new InMemoryCache(),
});

export default client