const { ApolloEngineLauncher } = require('apollo-engine');

// Define the Engine configuration.
const launcher = new ApolloEngineLauncher({
  // Get your Engine API key by creating a service on
  // engine.apollographql.com.
  apiKey: 'YOUR_ENGINE_API_KEY',
  origins: [{
    http: {
      // The URL that the Proxy should use to connect to your
      // GraphQL server.
      url: 'http://localhost:4000/',
    },
  }],
  // Tell the Proxy on what port to listen, and which paths should
  // be treated as GraphQL instead of transparently proxied as raw HTTP.
  // You can leave out the frontend section if you want: the default for
  // 'port' is process.env.PORT, and the default for endpoints is
  // ['/graphql'].
  frontends: [{
    port: 3000,
    endpoints: ['/'],
  }],
});

// Start the Proxy; crash on errors.
launcher.start().catch(err => { throw err; });
