const { ApolloEngineLauncher } = require('apollo-engine');

// Define the Engine configuration.
const launcher = new ApolloEngineLauncher({
  // Enter your API key from step 2 above. You can also provide this
  // in the ENGINE_API_KEY environment variable.
  apiKey: 'service:lafourchette:2NJtgGv2zM43B21qoDqbXQ',
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
