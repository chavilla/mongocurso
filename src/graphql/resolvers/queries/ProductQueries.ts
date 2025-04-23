import { IProduct } from "../../../models/ProductModel";
import ProductService from "../../../services/ProductService";
import { GetProductResponse } from "../types/ProductTypes";

const ProductQueries = {
    getProducts: async (): Promise<IProduct[]> => await ProductService.getAll(),
    getProduct: async (_:any, _id:string): Promise<GetProductResponse > => await ProductService.getProduct(_id)
}

export default ProductQueries;