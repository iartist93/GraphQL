import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';
import resolvers from './resolvers';

const app = express();

app.get('/', (req, res) => {
  res.send('Root app page requested ... res = text');
});

const root = resolvers;

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(8080, () =>
  console.log('http://localhost:8080/graphql\nhttp://localhost:8080/graphql'),
);
