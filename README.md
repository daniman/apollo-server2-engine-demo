# GraphQL Server demo wrapping a REST API

A super small demo of how to build a GraphQL server wrapping a REST endpoint, in this case from the meetup.com API, using Apollo Server 2.0 and Apollo Engine.

Slides from the original presentation accompanying the demo: https://docs.google.com/presentation/d/1ZeV1yEcWlLSIJtdLhkPLXrAv0HnOv-pCT-Q5HuOZjyI/edit?usp=sharing

This demo uses Apollo Server 2.0 and Apollo Engine. To run:

```
npm install
node index.js
```

In a separate window, run:

```
node engine.js
```

Now you'll have two processes running, one for your Node server on `localhost:4000`, and the other for your Engine proxy on `localhost:3000`.

If you grab an API key from engine.apollographql.com and put it in `engine.js`, then connect to `localhost:3000` and send some requests, you'll see your requests show up in the Engine UI.
