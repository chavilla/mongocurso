import Product from "../models/ProductModel";
import { v4 as uuidv4 } from 'uuid'

const ProductService = {
  getAll: async () => {
    let storedProducts = await Product.find({});
    return storedProducts;
  },
  getProduct: async (_id: string) => {
    try {
      
      let product = await Product.findOne({_id});

      if (!product) {
        return {
          message:`¡There was not found a product with the _id ${_id}!`,
          status: true
        }
      }

      return {
        product,
        message: "¡Product found successfully!",
        status: true
      };

    } catch (error) {
      return {
        message: "¡Something went wrong!",
        status: false
      }
    }
  },
  createProduct: async (description: string, price: number) => {
    try {
      let storedProduct = await Product.create({ 
        _id: uuidv4(),
        description, 
        price });
      return {
        message: "¡Product was stored successfully!",
        status: true,
        storedProduct
      };
    } catch (error) {

      console.log("Error ", error);
      

      return {
        message: "¡Something went wrong!",
        status: false
      };
    }
  },
};

export default ProductService;
