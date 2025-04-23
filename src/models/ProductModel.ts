import mongoose, { Document, Model, Schema } from "mongoose";

// 1. Define a TypeScript interface for the document
interface IProductEntity extends Document {
  description: string;
  price: number;
  createdAt: Date;
}

export interface IProduct extends IProductEntity   {
  _id: string;
}

// 2. Create the schema with proper type info
const productSchema: Schema<IProduct> = new mongoose.Schema({
  _id: { type: String, required: true },
  description: { type: String, required: true, unique:true },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

// 3. Export the model with proper typing
const Product: Model<IProduct> = mongoose.model<IProduct>('Product', productSchema);
export default Product;
