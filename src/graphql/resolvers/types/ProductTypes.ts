import { IProduct } from '../../../models/ProductModel';

export type ICreateProduct = {
    description: string,
    price: number,
}

interface ICommonsFieldRequestResponse {
    message: string,
    status: boolean,
} 

export interface ProductRequestResponse extends ICommonsFieldRequestResponse {
    productAffected?: IProduct
}

export interface GetProductResponse extends ICommonsFieldRequestResponse {
    product?: IProduct
}