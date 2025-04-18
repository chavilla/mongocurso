import ProductService from "../../../services/ProductService";
import { ICreateProduct, ProductRequestResponse } from "../types/ProductTypes";

const ProductMutations = {
    createProduct: async (_: any, { description, price}: ICreateProduct): Promise<ProductRequestResponse> =>{ 
        console.log("Description ", description);
        console.log("Prices ", price);
        return await ProductService.createProduct(description, price)
    }
}

export default ProductMutations;