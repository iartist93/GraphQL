import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Store {
        store: String
    }
    type Product {
        id: ID
        name: String
        description: Float
        price: Float
        soldout: Boolean
        stores: [Store]
    }
    type Query {
        hello: String
        product: Product
    }
`);

export default schema;
