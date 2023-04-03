import { reject } from 'lodash';
import { ProductsModel } from './dbconnector';

// description of a new product
// class Product {
//   constructor(id, product) {
//     const { name, description, price, soldout, inventory, stores } = product;
//     this.id = id;
//     this.name = name;
//     this.description = description;
//     this.price = price;
//     this.soldout = soldout;
//     this.stores = stores;
//     this.inventory = inventory;
//   }
// }

const resolvers = {
  getProducts: async () => {
    return await ProductsModel.find({});
  },

  getProduct: ({ id }) => {
    return new Promise((resolve, reject) => {
      ProductsModel.findById({ _id: id }, (err, product) => {
        if (err) reject(err);
        else resolve(product);
      });
    });
  },

  createProduct: async ({ input }) => {
    const newProduct = new ProductsModel({
      name: input.name,
      description: input.description,
      price: input.price,
      soldout: input.soldout,
      inventory: input.inventory,
      stores: input.stores,
    });

    // _id is created by MongoDB itself
    newProduct.id = newProduct._id;

    // insert or update
    const product = await newProduct.save();

    if (product.id) {
      return product;
    }
  },

  updateProduct: async ({ input }) => {
    const newProduct = await ProductsModel.findOneAndUpdate(
      { _id: input.id },
      input,
      {
        new: false,
      },
    );

    if (newProduct.id) {
      return newProduct;
    }
  },

  deleteProduct: async ({ id }) => {
    await ProductsModel.findOneAndRemove({ _id: id });
    return `Sucessfull deleting product id=${id}`;
  },
};

export default resolvers;
