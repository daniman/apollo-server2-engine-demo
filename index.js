const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Location @cacheControl(maxAge: 30) {
    city: String
    name_string: String
    localized_country_name: String
    hello: Float
  }

  type Query {
    locations: [Location]
  }

`;

const resolvers = {
  Query: {
    locations: () =>
      fetch('http://api.meetup.com/find/locations').then(res => res.json())
  }
};

const mocks = {
  String: () => 'Hello La Fourchette!',
  Float: () => 3.14
};

const server = new ApolloServer({
  mocks,
  typeDefs,
  resolvers,
  engine: {
    apiKey: 'service:lafourchette:DERRb5z1HtF63UXZNQzhGw',
    endpointUrl: 'https://engine-staging-report.apollodata.com'
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
