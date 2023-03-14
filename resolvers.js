// description of a new product
class Product {
  constructor(id, product) {
    const { name, description, price, soldout, inventory, stores } = product;
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.soldout = soldout;
    this.store = stores;
    this.inventory = inventory;
  }
}

// Fake database for now
// to store incoming products from mutations
const productsDB = {};

const resolvers = {
  getProducts: ({ id }) => {
    return new Product(id, productsDB[id]);
  },
  createProduct: ({ input }) => {
    let id = require('crypto').randomBytes(10).toString('hex');
    console.log('✅✅✅✅ Create id ', id);
    productsDB[id] = input;
    return new Product(id, input);
  },
};

export default resolvers;
