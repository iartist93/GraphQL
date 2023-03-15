import { buildSchema } from 'graphql';

const schema = buildSchema(`
    enum Stock {
        SOLDOUT
        INSTOCK
    }

    type Store {
        store: String
    }

    type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Stock
        inventory: Int
        stores: [Store]
    }

    type Query {
        getProduct(id: ID): Product
    }
    
    type Mutation {
        createProduct(input: ProductInput): Product
        updateProduct(input: ProductInput): Product
        deleteProduct(id: ID): String
        
    }
    
    input StoreInput {
        store: String
    }

    input ProductInput {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Stock
        inventory: Int
        stores: [StoreInput]
    }
`);

export default schema;
