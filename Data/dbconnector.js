import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/products', {
  useNewURLParser: true,
});

// Map mongoDB collection
const productScheme = mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  soldout: {
    type: String,
  },
  inventory: {
    type: Number,
  },
  stores: {
    type: Array,
  },
});

const ProductsModel = mongoose.model('products', productScheme);

export { ProductsModel };
