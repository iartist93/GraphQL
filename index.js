import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
  res.send('Root app page requested ... res = text');
});

const root = {
  product: () => {
    return {
      id: 233434,
      name: 'product 1',
      description: 'product 1 description',
      prince: 34.343,
      soldout: false,
      stores: [{ store: 'store 1' }, { store: 'store 2' }],
    };
  },
  hello: () => "HI, I'm ahmed",
};

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
