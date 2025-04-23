
export const types =`
    type Product {
    _id: ID
    description: String
    price: Int
    createdAt: Date
    }

    scalar Date

    input InputProduct {
        description: String!
        price: Int!
    }

    type ProductRequestResponse {
        message: String!
        status: Boolean!
        productAffected: Product
    }

    type getProductResponse {
        message: String!
        status: Boolean!
        product: Product
    }
`;

export const queries = `
    getProducts: [Product!]!
    getProduct(_id: String!): getProductResponse
`;

export const mutations = `
    createProduct (description: String!, price: Int!): ProductRequestResponse!
`;